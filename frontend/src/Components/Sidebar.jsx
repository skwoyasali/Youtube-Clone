import { Home, Video, Library, Clock } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={`${
        isOpen ? "w-48" : "w-0"
      } transition-all duration-300 bg-white shadow-md h-screen overflow-hidden fixed top-14 left-0 z-40`}
    >
      <nav className="flex flex-col p-4 space-y-4 text-sm">
        <SidebarItem icon={<Home />} label="Home" />
        <SidebarItem icon={<Video />} label="Shorts" />
        <SidebarItem icon={<Clock />} label="Watch Later" />
        <SidebarItem icon={<Library />} label="Library" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
