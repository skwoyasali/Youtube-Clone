// src/components/VideoCard.jsx
import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="w-full cursor-pointer p-2 rounded hover:shadow-lg ">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-2">
        <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
        <p className="text-gray-600 text-sm">{video.channel}</p>
        <p className="text-gray-500 text-xs">{video.views} views</p>
      </div>
    </div>
  );
};

export default VideoCard;
