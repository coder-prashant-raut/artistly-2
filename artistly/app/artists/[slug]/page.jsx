"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import artists from "@/data/artists.json";

export default function ArtistDetailPage() {
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
      <div className="p-10 text-center text-red-500">
        Artist not found for slug: {slug}
      </div>
    );
  }

  const similarArtists = artists.filter(
    (a) => a.category === artist.category && a.name !== artist.name
  );

  const formatSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Main Artist Details */}
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-64 object-cover rounded-xl shadow mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {artist.name}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {artist.category} · {artist.location}
      </p>
      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-4">
        ₹{artist.price.toLocaleString()}
      </p>
      <p className="mt-4 text-gray-800 dark:text-gray-300">
        {artist.description || "No description available."}
      </p>

      {/* Book Now Button */}
      <button
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        onClick={() => alert(`Booking ${artist.name}...`)}
      >
        Book Now
      </button>

      {/* Similar Artists Section */}
      {similarArtists.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Similar Artists
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {similarArtists.map((similar) => (
              <div
                key={similar.id}
                className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => router.push(`/artists/${formatSlug(similar.name)}`)}
              >
                <img
                  src={similar.image}
                  alt={similar.name}
                  className="h-40 w-full object-cover rounded mb-3"
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {similar.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {similar.category} · {similar.location}
                </p>
                <div className="flex gap-2">
                  <button
                    className="flex-1 text-sm bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-white py-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-600"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card click
                      router.push(`/artists/${formatSlug(similar.name)}`);
                    }}
                  >
                    More Details
                  </button>
                  <button
                    className="flex-1 text-sm bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Booking ${similar.name}...`);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
