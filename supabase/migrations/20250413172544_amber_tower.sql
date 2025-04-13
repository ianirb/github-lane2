/*
  # Create Deals table

  1. New Table
    - `deals`
      - `uuid` (text, primary key)
      - `deal_name` (text, not null)
      - `city` (text)
      - `state` (text)
      - `deal_type` (text)
      - `needs` (text)
      - `asking` (text)
      - `public_status` (boolean, default false)
      - `public_info` (text)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `deals` table
    - Add policy for public viewing of deals where public_status is true
    - Add policy for admin management of all deals
*/

CREATE TABLE IF NOT EXISTS deals (
  uuid text PRIMARY KEY,
  deal_name text NOT NULL,
  city text,
  state text,
  deal_type text,
  needs text,
  asking text,
  public_status boolean DEFAULT false,
  public_info text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE deals ENABLE ROW LEVEL SECURITY;

-- Create policy for public viewing of deals
CREATE POLICY "Only show public deals to everyone"
  ON deals
  FOR SELECT
  TO public
  USING (public_status = true);

-- Create policy for admin management
CREATE POLICY "Only admins can manage deals"
  ON deals
  FOR ALL
  TO authenticated
  USING ((auth.jwt() ->> 'role'::text) = 'admin'::text)
  WITH CHECK ((auth.jwt() ->> 'role'::text) = 'admin'::text);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_deals_updated_at
  BEFORE UPDATE ON deals
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();