// src/components/VideoGrid.jsx
import React from "react";
import VideoCard from "./VideoCard";
import { Sidebar } from "lucide-react";
import { useSidebar} from "../context/SidebarContext";

const dummyVideos = [
  {
    id: 1,
    title: "Learn React in 5 Minutes",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    channel: "Code Academy",
    views: "1.2M",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    thumbnail: "https://i.ytimg.com/vi/1JsJx1x35c0/maxresdefault.jpg",
    channel: "Tech Simplified",
    views: "900K",
  },
  {
    id: 3,
    title: "Build a Netflix Clone",
    thumbnail: "https://i.ytimg.com/vi/8EJ3zbKTWQ8/maxresdefault.jpg",
    channel: "Web Dev World",
    views: "2.3M",
  },  {
    id: 4,
    title: "Learn React in 5 Minutes",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    channel: "Code Academy",
    views: "1.2M",
  },
  {
    id: 5,
    title: "Understanding JavaScript Closures",
    thumbnail: "https://i.ytimg.com/vi/1JsJx1x35c0/maxresdefault.jpg",
    channel: "Tech Simplified",
    views: "900K",
  },
  {
    id: 6,
    title: "Build a Netflix Clone",
    thumbnail: "https://i.ytimg.com/vi/8EJ3zbKTWQ8/maxresdefault.jpg",
    channel: "Web Dev World",
    views: "2.3M",
  },  {
    id: 7,
    title: "Learn React in 5 Minutes",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    channel: "Code Academy",
    views: "1.2M",
  },
  {
    id: 8,
    title: "Understanding JavaScript Closures",
    thumbnail: "https://i.ytimg.com/vi/1JsJx1x35c0/maxresdefault.jpg",
    channel: "Tech Simplified",
    views: "900K",
  },
  {
    id: 9,
    title: "Build a Netflix Clone",
    thumbnail: "https://i.ytimg.com/vi/8EJ3zbKTWQ8/maxresdefault.jpg",
    channel: "Web Dev World",
    views: "2.3M",
  },  {
    id: 10,
    title: "Learn React in 5 Minutes",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    channel: "Code Academy",
    views: "1.2M",
  },
  {
    id: 11,
    title: "Understanding JavaScript Closures",
    thumbnail: "https://i.ytimg.com/vi/1JsJx1x35c0/maxresdefault.jpg",
    channel: "Tech Simplified",
    views: "900K",
  },
  {
    id: 12,
    title: "Build a Netflix Clone",
    thumbnail: "https://i.ytimg.com/vi/8EJ3zbKTWQ8/maxresdefault.jpg",
    channel: "Web Dev World",
    views: "2.3M",
  }
  // Add more videos if needed
];

function VideoGrid(){
    const {isOpen} = useSidebar();
  return (
  <div className={`${
    isOpen ? "ml-60" : "ml-0"
  }`}>
    <div className={`p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  transition-all duration-300 `}>
      {dummyVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
</div>
  );
};

export default VideoGrid;
