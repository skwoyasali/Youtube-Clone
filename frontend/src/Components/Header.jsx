import { useState } from "react";
import { Menu, Mic, Search, Video, Bell } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import { Link } from "react-router-dom";
const Header = ({ onMenuClick }) => {
  const [search, setSearch] = useState("");
  const { toggleSidebar } = useSidebar();

  const handleSearch = (e) => {
    e.preventDefault();
    // Optional: Implement search route or logic
    console.log("Search:", search);
  };

  return (
    <header className="flex items-center justify-between p-2 px-4 bg-white shadow-md sticky top-0 z-50">
      {/* Left */}
      <div className="flex items-center space-x-4">
        <Menu className="cursor-pointer" onClick={toggleSidebar} />
        <Link>
          <img
            className="h-6"
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="YouTube Logo"
          />
        </Link>
      </div>

      {/* Middle - Search */}
      <form
        onSubmit={handleSearch}
        className="flex items-center flex-grow max-w-xl mx-4"
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
        <Mic className="ml-3 w-5 h-5 text-gray-600 cursor-pointer" />
      </form>

      {/* Right */}
      <div className="flex items-center space-x-4">
        <Video className="w-6 h-6 cursor-pointer" />
        <Bell className="w-6 h-6 cursor-pointer" />
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
