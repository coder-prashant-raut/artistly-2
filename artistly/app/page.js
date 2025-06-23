
const categories = [
  { label: "Singers", image: "https://media.istockphoto.com/id/1137781483/photo/black-male-guitarist-singing-and-playing-acoustic-guitar-on-stage.jpg?s=1024x1024&w=is&k=20&c=dxFsPJ4AsfVceswQc7GEyVEKOZXXd1ZHhms495DZfsw=" },
  { label: "Dancers", image: "https://media.istockphoto.com/id/623457160/photo/portrait-of-the-classical-ballerina-in-white-dress-on-black.jpg?s=1024x1024&w=is&k=20&c=Mk0PuN8-QPHgb5JofxZzJDAQ4Rj7xZddqIJQCimIO3Q=" },
  { label: "DJs", image: "https://media.istockphoto.com/id/160993275/photo/dj-with-arms-outstretched-overlooking-dance-floor.jpg?s=1024x1024&w=is&k=20&c=ceP4Et4QgD0RHJtBno37NIjjMR3gyJX20rLEm-kfrlM=" },
  { label: "Speakers", image: "https://media.istockphoto.com/id/1039606566/photo/business-people-listening-to-the-speaker-at-a-conference.jpg?s=1024x1024&w=is&k=20&c=rPd1yKIq-SRyjtExB2bU8dBB8P2fTJBq-NvDoq27L74=" },
];

export default function HomePage() {
  return (
    <section className="py-20 space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Discover & Book Top Performing Artists
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Artistly connects you with the best singers, dancers, DJs, and speakers for unforgettable events. Explore talent and book them easily.
        </p>
        <button className="">
          <a href="/artists">Browse Artists</a>
        </button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.label}
            className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={category.image}
              alt={category.label}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-blue-700">
                {category.label}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Book the best {category.label.toLowerCase()}s in your city.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
