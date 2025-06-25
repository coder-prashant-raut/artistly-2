import ArtistsClient from "@/components/pages/ArtistsClient";
import artistsData from "@/data/artists.json";

export const metadata = {
  title: "Browse Artists - Artistly",
  description: "Explore top artists by category, location, and price.",
};

export default function ArtistsPage() {
  return <ArtistsClient artists={artistsData} />;
}
