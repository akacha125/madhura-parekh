const works = [
  {
    id: 1,
    title: "Artwork 1",
    category: "Mixed Media",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  },
  {
    id: 2,
    title: "Artwork 2",
    category: "Installation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    id: 3,
    title: "Artwork 3",
    category: "Sculpture",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
];

const WorkGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((work) => (
        <div
          key={work.id}
          className="group relative overflow-hidden aspect-square animate-fade-in"
        >
          <img
            src={work.image}
            alt={work.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
            <h3 className="text-xl font-heading">{work.title}</h3>
            <p className="text-sm mt-2">{work.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkGrid;