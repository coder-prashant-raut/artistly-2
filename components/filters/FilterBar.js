"use client";
import { useTheme } from "@/components/theme/ThemeContext";

export default function FilterBar({ filters, onChange, onReset, categories, locations }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const selectClass = `px-3 py-2 text-sm rounded border transition-colors duration-200
    ${isDark 
      ? "bg-zinc-800 text-white border-zinc-700 placeholder-gray-400" 
      : "bg-white text-gray-900 border-gray-300"}`;

  const resetClass = isDark
    ? "text-blue-400 hover:underline"
    : "text-blue-600 hover:underline";

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
      <div className="flex gap-4 w-full sm:w-auto">
        <select
          className={selectClass}
          value={filters.category}
          onChange={(e) => onChange("category", e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          className={selectClass}
          value={filters.location}
          onChange={(e) => onChange("location", e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <button onClick={onReset} className={`${resetClass} text-sm`}>
        Reset Filters
      </button>
    </div>
  );
}
