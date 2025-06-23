"use client";

export default function FilterBar({ filters, onChange, onReset, categories, locations }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
      <div className="flex gap-4 w-full sm:w-auto">
        <select
          className="border rounded px-3 py-2 text-sm"
          value={filters.category}
          onChange={(e) => onChange("category", e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          className="border rounded px-3 py-2 text-sm"
          value={filters.location}
          onChange={(e) => onChange("location", e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <button
        onClick={onReset}
        className="text-blue-600 text-sm hover:underline"
      >
        Reset Filters
      </button>
    </div>
  );
}
