import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideoById } from "../utils/api";

function Watch() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getVideo = async () => {
      const data = await fetchVideoById(videoId);
      setVideo(data);
    };
    getVideo();
  }, [videoId]);

  if (!video) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="p-4 text-white">
      <div className="w-full h-[400px] mb-4">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="text-xl font-bold mb-2">{video.title}</h1>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-semibold">{video.channelName}</p>
          <p className="text-sm text-gray-400">{video.views} views</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-gray-700 px-4 py-2 rounded">👍 {video.likes}</button>
          <button className="bg-gray-700 px-4 py-2 rounded">👎 {video.dislikes}</button>
        </div>
      </div>
      <p className="mb-6">{video.description}</p>

      <div>
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        {video.comments.map((comment, index) => (
          <div key={index} className="mb-4 border-b border-gray-700 pb-2">
            <p className="font-semibold">{comment.user}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch;