import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const works = [
  {
    id: 1,
    title: "Artwork 1",
    category: "Mixed Media",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "A mixed media piece exploring the intersection of traditional and digital art forms. Created using acrylics, digital manipulation, and found objects.",
    dimensions: "24\" x 36\"",
    year: "2023",
    materials: "Acrylic, digital print, found objects",
  },
  {
    id: 2,
    title: "Artwork 2",
    category: "Installation",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "An immersive installation piece that invites viewers to explore the relationship between space and perception.",
    dimensions: "10' x 15' x 8'",
    year: "2023",
    materials: "Mixed media, LED lights, mirrors",
  },
  {
    id: 3,
    title: "Artwork 3",
    category: "Sculpture",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "A sculptural exploration of form and negative space, crafted from reclaimed materials.",
    dimensions: "48\" x 24\" x 24\"",
    year: "2022",
    materials: "Steel, wood, found objects",
  },
];

const WorkGrid = () => {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <div
            key={work.id}
            className="group relative overflow-hidden aspect-square animate-fade-in cursor-pointer"
            onClick={() => setSelectedWork(work)}
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

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        {selectedWork && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading mb-4">
                {selectedWork.title}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Description</h4>
                  <p className="text-muted-foreground">{selectedWork.description}</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold">Category:</span> {selectedWork.category}</p>
                  <p><span className="font-semibold">Year:</span> {selectedWork.year}</p>
                  <p><span className="font-semibold">Dimensions:</span> {selectedWork.dimensions}</p>
                  <p><span className="font-semibold">Materials:</span> {selectedWork.materials}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default WorkGrid;