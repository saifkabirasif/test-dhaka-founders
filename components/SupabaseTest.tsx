"use client";

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

export default function SupabaseTest() {
  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.log("Supabase connection: Error —", error.message);
      } else {
        console.log("Supabase connection: OK");
      }
    });
  }, []);

  return null;
}
