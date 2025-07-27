let mockDB = {
  "123": {
    id: "123",
    title: "Learn MERN Stack - Full Tutorial",
    channelName: "Sk Woyas Ali",
    views: "10K",
    likes: 150,
    dislikes: 2,
    description: "This is a detailed MERN Stack video tutorial.",
    comments: [
      { user: "Alice", text: "Awesome tutorial!" },
      { user: "Bob", text: "Very helpful, thanks!" },
    ],
  },
};

export const fetchVideoById = async (videoId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDB[videoId] || mockDB["123"]), 300);
  });
};

export const addComment = async (videoId, commentText) => {
  const video = mockDB[videoId];
  video.comments.push({ user: "Anonymous", text: commentText });
  return new Promise((resolve) => setTimeout(() => resolve({ ...video }), 200));
};

export const deleteComment = async (videoId, index) => {
  const video = mockDB[videoId];
  video.comments.splice(index, 1);
  return new Promise((resolve) => setTimeout(() => resolve({ ...video }), 200));
};

export const updateComment = async (videoId, index, newText) => {
  const video = mockDB[videoId];
  video.comments[index].text = newText;
  return new Promise((resolve) => setTimeout(() => resolve({ ...video }), 200));
};