import { useState } from "react";
import { Menu, Mic, Search, Video, Bell } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";

const Header = ({ onMenuClick }) => {
  const [search, setSearch] = useState("");
  const { toggleSidebar } = useSidebar();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
      {/* Left - Logo and Menu */}
      <div className="flex items-center space-x-4">
        <Menu
          className="cursor-pointer w-6 h-6 sm:w-7 sm:h-7"
          onClick={toggleSidebar}
        />
        <Link to="/">
          <img
            className="h-5 sm:h-6"
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube Logo"
          />
        </Link>
      </div>

      {/* Middle - Search (hidden on small screens) */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex items-center flex-grow max-w-xl mx-4"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full cursor-pointer"
        >
          <Search className="w-5 h-6" />
        </button>
        <Mic className="ml-3 w-5 h-5 text-gray-600 cursor-pointer hidden lg:block" />
      </form>

      {/* Right - Icons */}
      <div className="flex items-center space-x-4">
        {/* Search icon shown only on small screens */}
        <Search className="w-5 h-5 md:hidden cursor-pointer" />

        <Video className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
        <Bell className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
        <Link to="/login">
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
