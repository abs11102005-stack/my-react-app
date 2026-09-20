// This is my stack card where i add technologies
import type { ExpTech } from "../types";
// add the type props
interface StackSidebarProps {
  selectedStack: ExpTech[];
  onRemove: (id: string, name: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ selectedStack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm sticky top-6">
      <h3 className="font-bold text-lg text-gray-900">Your Stack</h3>
      <p className="text-xs text-gray-400 mb-4">
        {selectedStack.length > 0
          ? `${selectedStack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center text-xs text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-3">
          {selectedStack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">{item.name}</h4>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id, item.name)}
                className="text-gray-400 hover:text-red-500 font-semibold text-sm px-1"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 text-xs font-semibold rounded-lg transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;