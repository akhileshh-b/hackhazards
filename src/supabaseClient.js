import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bhxooyfcdiavsjqtcbny.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoeG9veWZjZGlhdnNqcXRjYm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NjYxNjksImV4cCI6MjA2MTM0MjE2OX0.qvOWTVfW7JcxG8wbS5_XW9M2-9ARa-skI02Ih67mUn4';

export const supabase = createClient(supabaseUrl, supabaseKey); 