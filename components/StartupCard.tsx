import Link from "next/link";

type Startup = {
  id: string;
  company_name: string;
  website_url?: string | null;
  category?: string | null;
  description?: string | null;
  founder_name: string;
  founder_email?: string | null;
  linkedin_url?: string | null;
  created_at?: string | null;
};

const categoryBorderColors: Record<string, string> = {
  fintech: "#007BFF",
  healthtech: "#10B981",
  edtech: "#8B5CF6",
  saas: "#F97316",
  "e-commerce": "#EC4899",
  "ai/ml": "#06B6D4",
  agritech: "#22C55E",
};

const categoryBadgeColors: Record<string, string> = {
  fintech: "bg-blue-100 text-blue-700",
  healthtech: "bg-emerald-100 text-emerald-700",
  edtech: "bg-purple-100 text-purple-700",
  saas: "bg-orange-100 text-orange-700",
  "e-commerce": "bg-pink-100 text-pink-700",
  "ai/ml": "bg-cyan-100 text-cyan-700",
  agritech: "bg-green-100 text-green-700",
};

function getBorderColor(category?: string | null): string {
  const key = (category ?? "").toLowerCase().trim();
  return categoryBorderColors[key] || "#6B7280";
}

function getBadgeClass(category?: string | null): string {
  const key = (category ?? "").toLowerCase().trim();
  return categoryBadgeColors[key] || "bg-gray-100 text-gray-700";
}

function formatCategory(category?: string | null): string {
  if (!category) return "";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function StartupCard({ startup }: { startup: Startup }) {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-t-4 flex flex-col"
      style={{ borderTopColor: getBorderColor(startup.category) }}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {startup.company_name}
          </h3>
          {startup.category && (
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${getBadgeClass(startup.category)}`}
            >
              {formatCategory(startup.category)}
            </span>
          )}
        </div>

        {startup.description && (
          <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
            {startup.description}
          </p>
        )}

        <div className="mt-auto space-y-3">
          {startup.founder_name && (
            <p className="text-xs text-gray-400">
              by <span className="font-medium text-gray-500">{startup.founder_name}</span>
            </p>
          )}

          <Link
            href={`/directory/${startup.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            View Profile
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
