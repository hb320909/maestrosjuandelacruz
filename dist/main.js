import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://upznvkoiiiazvnuowhdr.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_TaFJ0GGjMhmCGnGi4N4dyA_auGwFljE'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
