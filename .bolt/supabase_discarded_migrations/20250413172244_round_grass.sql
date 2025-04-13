/*
  # Add public_status column to deals table

  1. Changes
    - Add `public_status` boolean column with default false
    - Update policy to use public_status field

  2. Security
    - Update public viewing policy to only show deals where public_status is true
*/

-- Add public_status column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'deals' 
    AND column_name = 'public_status'
  ) THEN
    ALTER TABLE deals ADD COLUMN public_status boolean DEFAULT false;
  END IF;
END $$;

-- Drop existing public viewing policy
DROP POLICY IF EXISTS "Deals are viewable by everyone" ON deals;

-- Create new policy that only shows public deals
CREATE POLICY IF NOT EXISTS "Only show public deals to everyone"
  ON deals
  FOR SELECT
  TO public
  USING (public_status = true);