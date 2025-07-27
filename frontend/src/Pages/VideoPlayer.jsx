import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchVideoById, addComment, deleteComment, updateComment } from "../utils/api";

function Watch() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const getVideo = async () => {
      const data = await fetchVideoById(videoId);
      setVideo(data);
    };
    getVideo();
  }, [videoId]);

  const handleAddComment = async () => {
    if (!newComment) return;
    const updated = await addComment(videoId, newComment);
    setVideo(updated);
    setNewComment("");
  };

  const handleDeleteComment = async (index) => {
    const updated = await deleteComment(videoId, index);
    setVideo(updated);
  };

  const handleEditComment = async (index) => {
    const updated = await updateComment(videoId, index, editText);
    setVideo(updated);
    setEditIndex(null);
    setEditText("");
  };

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
        <div className="mb-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 mb-2"
            placeholder="Add a comment..."
          />
          <button
            onClick={handleAddComment}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Post Comment
          </button>
        </div>
        {video.comments.map((comment, index) => (
          <div key={index} className="mb-4 border-b border-gray-700 pb-2">
            <p className="font-semibold">{comment.user}</p>
            {editIndex === index ? (
              <div>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 mb-2"
                />
                <button
                  onClick={() => handleEditComment(index)}
                  className="bg-yellow-500 px-4 py-1 mr-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditIndex(null)}
                  className="bg-gray-600 px-4 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between">
                <p>{comment.text}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setEditText(comment.text);
                    }}
                    className="text-yellow-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watch;