// This is my every technology card
import type { ExpTech } from "../types";

interface TechCardProps {
  tech: ExpTech;
  isAdded: boolean;
  onAddToStack: () => void;
}

const TechCard = ({ tech, isAdded, onAddToStack }: TechCardProps) => {
    return (
        <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
          <span className="text-xs px-2.5 py-1 rounded-full bg-sky-50 text-sky-500 font-medium">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{tech.description}</p>

        <div className="flex items-center gap-2 mt-4 text-xs">
          <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
            {tech.category}
          </span>
          <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
            {tech.difficulty}
          </span>
          <span className="ml-auto font-bold text-gray-700">★ {tech.rating}</span>
        </div>
      </div>

      <button
        onClick={onAddToStack}
        disabled={isAdded}
        className={`w-full mt-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
          isAdded
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
    );
};

export default TechCard;