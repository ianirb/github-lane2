export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      deals: {
        Row: {
          uuid: string
          deal_name: string
          city: string | null
          state: string | null
          deal_type: string | null
          needs: string | null
          asking: string | null
          public_status: boolean
          public_info: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          uuid: string
          deal_name: string
          city?: string | null
          state?: string | null
          deal_type?: string | null
          needs?: string | null
          asking?: string | null
          public_status?: boolean
          public_info?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          uuid?: string
          deal_name?: string
          city?: string | null
          state?: string | null
          deal_type?: string | null
          needs?: string | null
          asking?: string | null
          public_status?: boolean
          public_info?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}