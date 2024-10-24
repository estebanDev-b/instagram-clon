import { PlusSquare } from "lucide-react";


const Story = ({ story }) => (
  <div className="flex flex-col items-center space-y-1">
    <div
      className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-[3px] ${
        story.isUser
          ? "bg-gray-300"
          : "bg-gradient-to-tr from-yellow-400 to-fuchsia-600"
      }`}
    >
      <img
        src={story.image}
        alt={story.username}
        className="w-full h-full object-cover rounded-full border-2 border-white"
      />
      {story.isUser && (
        <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
          <PlusSquare className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </div>
      )}
    </div>
    <span className="text-xs truncate w-16 md:w-20 text-center">
      {story.username}
    </span>
  </div>
);

export default Story;
