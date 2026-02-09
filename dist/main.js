import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://upznvkoiiiazvnuowhdr.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_TaFJ0GGjMhmCGnGi4N4dyA_auGwFljE'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
