// Modules
import { registerRootComponent } from "expo";

// Common
import { supabaseConfig } from "@/common/configs.common";

// Helpers
import { initialiseSupabase } from "@/helpers/supabase.helper";

// Components
import { AppSplash } from "@/components/app-splash";

// Initialise Supabase
initialiseSupabase(supabaseConfig);

// Exports
export default registerRootComponent(AppSplash);
