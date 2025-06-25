import ArtistOnboardForm from "@/components/forms/ArtistOnboardForm";

export const metadata = {
  title: "Onboard as Artist - Artistly",
  description: "Apply as a singer, dancer, DJ, or speaker to be listed on Artistly.",
};

export default function OnboardPage() {
  return (
    <section className="py-16 h-[91vh] px-4 bg-white text-gray-900 dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Apply to Join Artistly
        </h1>
        <ArtistOnboardForm />
      </div>
    </section>
  );
}
