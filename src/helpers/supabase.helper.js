// Polyfills
import "react-native-url-polyfill/auto";

// Modules
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

// Instance
let supabase;

// Initialise Supabase
export const initialiseSupabase = ({ projectKey, projectUrl }) => {
  supabase = createClient(projectUrl, projectKey, {
    auth: {
      storage: AsyncStorage,
      detectSessionInUrl: false,
      persistSession: true,
      autoRefreshToken: true,
    },
  });
};

// Get Supabase
export const getSupabase = () => {
  return supabase;
};
