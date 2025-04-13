/*
  # Create deals table with public status

  1. New Tables
    - `deals`
      - `id` (uuid, primary key)
      - `state` (text)
      - `city` (text)
      - `deal_type` (text)
      - `needs` (text)
      - `asking` (text)
      - `public_info` (text)
      - `public_status` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on deals table
    - Add policy for public viewing of public deals
    - Add policy for admin management
*/

CREATE TABLE IF NOT EXISTS deals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  state text,
  city text,
  deal_type text,
  needs text,
  asking text,
  public_info text,
  public_status boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE deals ENABLE ROW LEVEL SECURITY;

-- Only show public deals to everyone
CREATE POLICY "Only show public deals to everyone"
  ON deals
  FOR SELECT
  TO public
  USING (public_status = true);

-- Only allow authenticated users with admin role to manage deals
CREATE POLICY "Only admins can manage deals"
  ON deals
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_deals_updated_at
  BEFORE UPDATE ON deals
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();