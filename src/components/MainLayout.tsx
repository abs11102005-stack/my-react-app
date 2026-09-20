import { use, useState } from 'react';
import toast from 'react-hot-toast';
import type { ExpTech } from "../types";
import TechCard from './TechCard';
import StackSidebar from './StackSidebar';


const MainLayout = ({ mainlayoutPromise }: { mainlayoutPromise: Promise<ExpTech[]> }) => {
  const allTechnologies = use(mainlayoutPromise);
  
  const [selectedStack, setSelectedStack] = useState<ExpTech[]>([]);

  const handleAddToStack = (tech: ExpTech) => {
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemoveFromStack = (techId: string, techName: string) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
    toast.error(`${techName} removed from stack!`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("All technologies removed from stack!");
  };


  return (
    <div className="px-16">
      <h2 className="text-3xl font-bold">
        Explore{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p>Pick one technology per category to build your ideal stack.</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
        
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {allTechnologies.map((tech) => {
            const isAdded = selectedStack.some((item) => item.id === tech.id);
            return (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={isAdded}
                onAddToStack={() => handleAddToStack(tech)}
              />
            );
          })}
        </div>

        
        <div className="lg:col-span-1">
          <StackSidebar
            selectedStack={selectedStack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>

    
    </div>
  );
};

export default MainLayout;