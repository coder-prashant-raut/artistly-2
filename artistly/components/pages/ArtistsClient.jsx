"use client";

import { useState } from "react";
import ArtistCard from "@/components/cards/ArtistCard";
import FilterBar from "@/components/filters/FilterBar";

export default function ArtistsClient({ artists }) {
  const [filters, setFilters] = useState({ category: "", location: "", search: "" });

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleReset = () => {
    setFilters({ category: "", location: "", search: "" });
  };

  const allCategories = [...new Set(artists.map((a) => a.category))];
  const allLocations = [...new Set(artists.map((a) => a.location))];

  const filteredArtists = artists.filter((artist) => {
    const matchesCategory = !filters.category || artist.category === filters.category;
    const matchesLocation = !filters.location || artist.location === filters.location;
    const matchesSearch =
      !filters.search ||
      artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      artist.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <section className="py-16 px-4 text-gray-900 dark:text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center dark:text-white">
          All Artists
        </h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or description..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-800 text-sm"
          />
        </div>

        {/* Filter Bar */}
        <FilterBar
          filters={filters}
          onChange={handleFilterChange}
          onReset={handleReset}
          categories={allCategories}
          locations={allLocations}
        />

        {/* Artist Cards */}
        {filteredArtists.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
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
