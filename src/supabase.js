import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nrswlkkkbsuxpdaotdid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yc3dsa2trYnN1eHBkYW90ZGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYxNTQ0NDEsImV4cCI6MTk5MTczMDQ0MX0.aLvEd0w-8E-1OKfE3COPrVACwV4SUPpjmEpzMudxO0U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
