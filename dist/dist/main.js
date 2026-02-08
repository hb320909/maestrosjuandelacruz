import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://upznvkoiiiazvnuowhdr.supabase.co'
const supabaseAnonKey = 'sb_publishable_TaFJ0GGjMhmCGnGi4N4dyA_auGwFljE'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
