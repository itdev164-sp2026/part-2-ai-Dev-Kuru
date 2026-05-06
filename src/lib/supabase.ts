// For Server Components and Server Actions, use the SSR client
export { createSupabaseServerClient } from "@/lib/supabase/server";

// For Middleware
export { createSupabaseMiddlewareClient } from "@/lib/supabase/middleware";

// For Client Components
export { createSupabaseBrowserClient } from "@/lib/supabase/client";