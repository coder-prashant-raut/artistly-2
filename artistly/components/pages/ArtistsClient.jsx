"use client";

import { useState } from "react";
import ArtistCard from "@/components/cards/ArtistCard";
import FilterBar from "@/components/filters/FilterBar";

export default function ArtistsClient({ artists }) {
  const [filters, setFilters] = useState({ category: "", location: "" });

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  const handleReset = () => {
    setFilters({ category: "", location: "" });
  };

  const allCategories = [...new Set(artists.map((a) => a.category))];
  const allLocations = [...new Set(artists.map((a) => a.location))];

  const filteredArtists = artists.filter((artist) => {
    return (
      (filters.category === "" || artist.category === filters.category) &&
      (filters.location === "" || artist.location === filters.location)
    );
  });

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">All Artists</h1>

      <FilterBar
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleReset}
        categories={allCategories}
        locations={allLocations}
      />

      {filteredArtists.length === 0 ? (
        <p className="text-center text-gray-500">No artists found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      )}
    </section>
  );
}
