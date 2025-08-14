import { createClient } from '@supabase/supabase-js'

// Client-side Supabase client (للمتصفح)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  },
  realtime: {
    params: {
      eventsPerSecond: 10 // Limit events to prevent overwhelming
    }
  },
  global: {
    headers: {
      'apikey': supabaseAnonKey
    },
    fetch: async (url: RequestInfo | URL, options?: RequestInit): Promise<Response> => {
      const timeout = 10000; // 10 ثواني
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        const res = await fetch(url, {
          ...options,
          keepalive: true,
          signal: controller.signal
        });
        return res;
      } catch (err) {
        throw new Error(`Request failed or timed out: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        clearTimeout(id);
      }
    }
  }
})

// Server-side Supabase client (للـ API routes فقط)
let supabaseAdmin: any = null

if (typeof window === 'undefined') {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

export { supabaseAdmin }

// Utility function للتحقق من اتصال قاعدة البيانات (server-side only)
export async function testSupabaseConnection() {
  if (typeof window !== 'undefined' || !supabaseAdmin) {
    return { success: false, error: 'This function is server-side only' }
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('discount_codes')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Database connection test failed:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Database connection test error:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

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
