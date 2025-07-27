// src/components/FilterBar.jsx
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
  const {isOpen} = useSidebar();

  return (
    <div className={`flex overflow-x-auto space-x-2 px-4 py-2 bg-white sticky top-14 z-10 transition-all duration-300 ${
        isOpen ? "ml-[240px]" : "ml-[72px]"
      }` }>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium ${
            activeFilter === filter
              ? "bg-black text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
