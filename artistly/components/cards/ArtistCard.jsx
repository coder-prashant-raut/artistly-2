"use client";

export default function ArtistCard({ artist }) {
  return (
    <div className="rounded-2xl overflow-hidden border bg-white dark:bg-zinc-800 dark:border-zinc-700 shadow-md hover:shadow-xl transition duration-300">
      <img
        src={artist.image}
        alt={artist.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {artist.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {artist.category} · {artist.location}
        </p>
        <p className="text-lg text-blue-700 dark:text-blue-400 font-bold">
          ₹{artist.price.toLocaleString()}
        </p>

        <div className="mt-4 flex gap-2">
          <a
          href={`/artists/${artist.name.toLowerCase().replace(/\s+/g, "-")}`}

            className="flex-1 text-center bg-gray-100 dark:bg-zinc-700 text-sm text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-zinc-600 transition"
          >
            More Details
          </a>
          <button
            className="flex-1 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}