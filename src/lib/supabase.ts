import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface Program {
  id: string
  title: string
  description: string
  image_url: string
  is_featured: boolean
  created_at: string
  updated_at: string
}

export interface PricingPackage {
  id: string
  name: string
  price: number
  currency: string
  features: string[]
  is_popular: boolean
  is_active: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface DiscountCode {
  id: string
  code: string
  discount_percentage: number
  discount_amount: number
  is_percentage: boolean
  is_active: boolean
  valid_from: string
  valid_until: string
  usage_limit: number
  used_count: number
  created_at: string
  updated_at: string
}

export interface UniversalOffer {
  id: string
  title: string
  subtitle: string
  description: string
  image_url: string
  button_text: string
  is_active: boolean
  created_at: string
  updated_at: string
}
