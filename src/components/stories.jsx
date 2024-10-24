import { ChevronLeft, ChevronRight } from "lucide-react";
import Story from "./story";
import { stories } from "../assets/data.js";
import { useState, useEffect, useRef } from "react";
const Stories = () => {
  const storiesRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (scrollOffset) => {
    if (storiesRef.current) {
      storiesRef.current.scrollLeft += scrollOffset;
      updateArrowVisibility();
    }
  };

  const updateArrowVisibility = () => {
    if (storiesRef.current) {
      setShowLeftArrow(storiesRef.current.scrollLeft > 0);
      setShowRightArrow(
        storiesRef.current.scrollLeft <
          storiesRef.current.scrollWidth - storiesRef.current.clientWidth
      );
    }
  };

  useEffect(() => {
    const handleResize = () => updateArrowVisibility();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white  py-4 mb-4 relative">
      <div
        className="flex space-x-4 px-4 overflow-x-hidden scrollbar-hide"
        ref={storiesRef}
        onScroll={updateArrowVisibility}
      >
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
      {showLeftArrow && (
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
          onClick={() => scroll(-200)}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}
      {showRightArrow && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
          onClick={() => scroll(200)}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Stories;
