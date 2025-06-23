import artists from "@/data/artists.json";
import ArtistCard from "@/components/cards/ArtistCard";

export const metadata = {
  title: "Browse Artists - Artistly",
  description: "Explore and filter top singers, dancers, DJs, and speakers.",
};

export default function ArtistsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">All Artists</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
}
