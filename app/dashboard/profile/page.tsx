import { auth } from "@clerk/nextjs/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { ProfileForm } from "./ProfileForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage() {
  const { userId } = await auth();

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

  const { data: existingProfile } = await supabase
    .from("company_profile")
    .select("*")
    .eq("clerk_auth_key", userId)
    .single();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors mb-6 text-sm"
      >
        <ArrowLeft size={16} />
        Back to Dashboard
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold font-sans">Company Profile</h1>
        <p className="text-gray-400 mt-2">
          {existingProfile
            ? "Update your startup and founder details."
            : "Set up your startup and founder details to get discovered."}
        </p>
      </div>

      <ProfileForm defaultValues={existingProfile} />
    </div>
  );
}
