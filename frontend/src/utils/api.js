export const fetchVideoById = async (videoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: videoId,
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
      });
    }, 500);
  });
};