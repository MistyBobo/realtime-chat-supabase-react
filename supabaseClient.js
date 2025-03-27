// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and anon public key
const supabaseUrl = 'https://bjdfhoievfcvapvsnjcr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZGZob2lldmZjdmFwdnNuamNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMjk1ODYsImV4cCI6MjA1ODYwNTU4Nn0.HvFNyIzpq5AV45WRscHuZhEymbI3kbXJEgv9eshBoUA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
