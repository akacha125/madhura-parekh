// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zankdcxwlydfcdppyhtm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbmtkY3h3bHlkZmNkcHB5aHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxMjAzMzUsImV4cCI6MjA1MDY5NjMzNX0.2QLgrZWUp4vUaksGR_JCb6yIdhLbuMvR7IBZ9FBx4Po";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);