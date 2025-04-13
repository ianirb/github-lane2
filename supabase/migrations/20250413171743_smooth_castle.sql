/*
  # Update deals table RLS policy for public status

  1. Changes
    - Update RLS policy to only show deals where public_status is true
*/

-- Drop the existing public viewing policy
DROP POLICY IF EXISTS "Deals are viewable by everyone" ON deals;

-- Create new policy that only shows public deals
CREATE POLICY "Only show public deals to everyone"
  ON deals
  FOR SELECT
  TO public
  USING (public_status = true);