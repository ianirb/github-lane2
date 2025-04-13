/*
  # Add public_status column to deals table

  1. Changes
    - Add public_status column to deals table with default value of false
    - Update RLS policy to only show deals where public_status is true
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'deals' AND column_name = 'public_status'
  ) THEN
    ALTER TABLE deals ADD COLUMN public_status boolean DEFAULT false;
  END IF;
END $$;

-- Update the public viewing policy to only show public deals
DROP POLICY IF EXISTS "Deals are viewable by everyone" ON deals;
CREATE POLICY "Only show public deals to everyone"
  ON deals
  FOR SELECT
  TO public
  USING (public_status = true);