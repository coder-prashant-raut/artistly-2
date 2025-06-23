"use client";

export default function ArtistCard({ artist }) {
  return (
    <div className="rounded-xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
      <img
        src={artist.image}
        alt={artist.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{artist.name}</h3>
        <p className="text-sm text-gray-500">{artist.category} · {artist.location}</p>
        <p className="text-blue-700 font-bold mt-2">₹{artist.price.toLocaleString()}</p>
      </div>
    </div>
  );
}
