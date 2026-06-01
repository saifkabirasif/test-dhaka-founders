import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import DirectoryClient from "./DirectoryClient";

export default async function DirectoryPage() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll() {},
      },
    },
  );

  const { data: startups } = await supabase
    .from("company_profile")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">Startup Directory</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover and connect with the most promising startups building the future in Dhaka.
        </p>
      </div>

      <DirectoryClient initialData={startups || []} />
    </div>
  );
}
