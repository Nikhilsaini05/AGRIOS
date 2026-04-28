import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    'https://boohyqzcnlwvmspqjbem.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvb2h5cXpjbmx3dm1zcHFqYmVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NzY0MDQsImV4cCI6MjA5MjE1MjQwNH0.k6BPzG-Mz2zZtYAiiAWXhrgTQMDEsavEv6zXh0e--GA'
)