"use client";

import { useTheme } from "@/components/theme/ThemeContext";

export default function ArtistCard({ artist }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-2xl overflow-hidden border shadow-md hover:shadow-xl transition duration-300 
        ${isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-200"}`}
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="h-60 w-full object-cover" // ⬅️ Increased height
      />

      <div className="p-5 space-y-3">
        {/* Name, Category, Location Row */}
        <div className="flex items-center justify-between flex-wrap gap-1">
          <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
            {artist.name}
          </h3>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {artist.category} · {artist.location}
          </p>
        </div>

        {/* Price */}
        <p className={`text-base font-bold ${isDark ? "text-blue-400" : "text-blue-700"}`}>
          ₹{artist.price.toLocaleString()}
        </p>

        {/* Buttons */}
        <div className="mt-3 flex gap-2">
          <a
            href={`/artists/${artist.name.toLowerCase().replace(/\s+/g, "-")}`}
            className={`flex-1 text-center text-sm px-4 py-2 rounded transition 
              ${isDark 
                ? "bg-zinc-700 text-white hover:bg-zinc-600"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
          >
            More Details
          </a>
          <button
            className={`flex-1 text-sm px-4 py-2 rounded transition 
              ${isDark 
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
