"use client";
import Link from "next/link";
import { useState } from "react";
import artistsData from "@/data/artists.json";
import { toast } from "react-hot-toast";
import { useTheme } from "@/components/theme/ThemeContext";

export default function DashboardPage() {
  const [artists, setArtists] = useState(artistsData);
  const { theme } = useTheme();

  const handleDelete = (id) => {
    const updated = artists.filter((artist) => artist.id !== id);
    setArtists(updated);
    toast.success("Artist deleted");
  };

  return (
    <section className={`min-h-screen px-4 py-10 transition-colors duration-300 ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Link href="/onboard" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
            ➕ Add Artist
          </Link>
        </div>

        {artists.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No artists found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
              <tr className="bg-gray-100 text-gray-800 dark:bg-zinc-800 dark:text-white">

                  <th className="p-3 text-left">Name</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {artists.map((artist) => (
                  <tr key={artist.id} className="border-b border-gray-200 dark:border-zinc-700">
                    <td className="p-3">{artist.name}</td>
                    <td className="p-3 text-center">{artist.category}</td>
                    <td className="p-3 text-center">{artist.location}</td>
                    <td className="p-3 text-center">₹{artist.price}</td>
                    <td className="p-3 flex gap-2 justify-center">
                      <button className="px-3 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(artist.id)}
                        className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
