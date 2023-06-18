import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

export function getSupaBaseClient() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  return supabase;
}
