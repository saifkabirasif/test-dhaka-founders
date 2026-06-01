"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import StartupCard from "@/components/StartupCard";

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

export default function DirectoryClient({ initialData }: { initialData: Startup[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialData.forEach((s) => {
      if (s.category) cats.add(s.category.trim());
    });
    return Array.from(cats).sort();
  }, [initialData]);

  const filtered = useMemo(() => {
    let result = initialData;

    if (activeCategory) {
      result = result.filter(
        (s) => s.category?.toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.company_name?.toLowerCase().includes(q) ||
          s.description?.toLowerCase().includes(q) ||
          s.founder_name?.toLowerCase().includes(q) ||
          s.category?.toLowerCase().includes(q),
      );
    }

    return result;
  }, [initialData, activeCategory, searchQuery]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search startups, founders, or industries..."
            className="w-full bg-secondary-dark border border-gray-800 rounded-xl py-3 pl-12 pr-10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? "bg-primary text-white"
              : "bg-secondary-dark text-gray-300 hover:bg-gray-700"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-secondary-dark text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Showing {filtered.length} of {initialData.length} companies
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No companies match your search.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory(null);
            }}
            className="mt-4 text-primary hover:underline text-sm"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>
      )}
    </>
  );
}
