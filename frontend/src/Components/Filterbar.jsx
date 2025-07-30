import React, { useState } from "react";
import { useSidebar } from "../context/SidebarContext";

const filters = [
  "All",
  "Music",
  "News",
  "Gaming",
  "Live",
  "Sports",
  "Movies",
  "Comedy",
  "Education",
  "Fashion",
  "Technology",
  "Podcasts",
];

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { isOpen } = useSidebar();

  return (
    <div
      className={`top-14 z-10 bg-white
        transition-all duration-300
        ${isOpen ? "ml-[240px]" : "ml-[22px]"}
      `}
    >
      <div
        className="flex overflow-x-auto space-x-3 px-4 py-2 scrollbar-hide"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeFilter === filter
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
