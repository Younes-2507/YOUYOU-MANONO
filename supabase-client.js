import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase_url = "https://rozelrrnoejhhxjmhmjb.supabase.co";
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvemVscnJub2VqaGh4am1obWpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3MjIxOTcsImV4cCI6MjA5MTI5ODE5N30.onohXO3M1tlmXESKFFQkv2fW6L9X6WQUxP_0UBYpHeQ"


export const supabase = createClient(supabase_url, anon_key);