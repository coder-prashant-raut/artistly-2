"use client";
import { useTheme } from "@/components/theme/ThemeContext.jsx";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import artists from "@/data/artists.json";
import ArtistCard from "@/components/cards/ArtistCard";

export default function ArtistDetailPage() {
  const { theme } = useTheme(); // ✅ Use theme from global state
  const { slug } = useParams();
  const router = useRouter();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const found = artists.find(
      (a) => a.name.toLowerCase().replace(/\s+/g, "-") === slug
    );
    setArtist(found);
  }, [slug]);

  if (!artist) {
    return (
      <div
        className={`p-10 text-center ${
          theme === "dark" ? "text-red-400" : "text-red-500"
        }`}
      >
        Artist not found for slug: {slug}
      </div>
    );
  }

  const similarArtists = artists.filter(
    (a) => a.category === artist.category && a.name !== artist.name
  );

  return (
    <section
      className={`min-h-screen px-4 py-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-64 object-cover rounded-xl shadow mb-6"
        />
        <h1 className="text-3xl font-bold">{artist.name}</h1>
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
          {artist.category} · {artist.location}
        </p>
        <p
          className={`text-lg font-semibold mt-4 ${
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          }`}
        >
          ₹{artist.price.toLocaleString()}
        </p>
        <p className={theme === "dark" ? "text-gray-300 mt-4" : "text-gray-800 mt-4"}>
          {artist.description || "No description available."}
        </p>

        <button
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          onClick={() => alert(`Booking ${artist.name}...`)}
        >
          Book Now
        </button>
      </div>

      {similarArtists.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Similar {artist.category}s
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {similarArtists.map((similar) => (
              <ArtistCard key={similar.id} artist={similar} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
