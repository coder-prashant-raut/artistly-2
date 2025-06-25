"use client";

import { useState } from "react";
import ArtistCard from "@/components/cards/ArtistCard";
import FilterBar from "@/components/filters/FilterBar";
import { useTheme } from "@/components/theme/ThemeContext"; // ✅ Import your global theme

export default function ArtistsClient({ artists }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [filters, setFilters] = useState({
    category: "",
    location: "",
    search: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleReset = () => {
    setFilters({ category: "", location: "", search: "" });
  };

  const allCategories = [...new Set(artists.map((a) => a.category))];
  const allLocations = [...new Set(artists.map((a) => a.location))];

  const filteredArtists = artists.filter((artist) => {
    const matchesCategory =
      !filters.category || artist.category === filters.category;
    const matchesLocation =
      !filters.location || artist.location === filters.location;
    const matchesSearch =
      !filters.search ||
      artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      artist.description.toLowerCase().includes(filters.search.toLowerCase());

    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <section
      className={`py-16 px-4 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-zinc-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1
          className={`text-4xl font-bold mb-10 text-center ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          All Artists
        </h1>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or description..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className={`w-full sm:w-1/2 px-4 py-2 border rounded text-sm transition-colors ${
              isDark
                ? "bg-zinc-800 text-white border-zinc-700 placeholder-gray-400"
                : "bg-white text-gray-900 border-gray-300 placeholder-gray-500"
            }`}
          />
        </div>

        {/* Filters */}
        <FilterBar
          filters={filters}
          onChange={handleFilterChange}
          onReset={handleReset}
          categories={allCategories}
          locations={allLocations}
        />

        {/* Artist Cards */}
        {filteredArtists.length === 0 ? (
          <p
            className={`text-center mt-10 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            No artists found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
