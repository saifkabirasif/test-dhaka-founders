"use server";

import { auth } from "@clerk/nextjs/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function saveCompanyProfile(prevState: unknown, formData: FormData) {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, message: "", error: "Not authenticated" };
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    },
  );

  const company_name = formData.get("company_name") as string;
  const website_url = formData.get("website_url") as string | null;
  const category = formData.get("category") as string | null;
  const description = formData.get("description") as string | null;
  const founder_name = formData.get("founder_name") as string;
  const founder_email = formData.get("founder_email") as string | null;
  const linkedin_url = formData.get("linkedin_url") as string | null;

  const { data: existing } = await supabase
    .from("company_profile")
    .select("id")
    .eq("clerk_auth_key", userId)
    .single();

  if (existing) {
    const { error } = await supabase
      .from("company_profile")
      .update({
        company_name,
        website_url,
        category,
        description,
        founder_name,
        founder_email,
        linkedin_url,
      })
      .eq("clerk_auth_key", userId);

    if (error) {
      return { success: false, message: "", error: error.message };
    }

    revalidatePath("/dashboard/profile");
    return { success: true, message: "Profile updated successfully", error: null };
  }

  const { error } = await supabase.from("company_profile").insert({
    clerk_auth_key: userId,
    company_name,
    website_url,
    category,
    description,
    founder_name,
    founder_email,
    linkedin_url,
  });

  if (error) {
    return { success: false, message: "", error: error.message };
  }

  revalidatePath("/dashboard/profile");
  return { success: true, message: "Profile created successfully", error: null };
}
