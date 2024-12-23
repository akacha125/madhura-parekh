import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";

const WorkGrid = () => {
  const [selectedWork, setSelectedWork] = useState<typeof portfolioData.works[0] | null>(null);
  const { works } = portfolioData;

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