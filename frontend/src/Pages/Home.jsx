import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoCard from "../Components/VideoCard";
import FilterBar from "../Components/Filterbar";
import VideoGrid from "../Components/VideoGrid";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/videos`).then((res) => {
      setVideos(res.data);
    });
  }, []);

  return (
    <main className="p-4 w-full">
     <FilterBar />
     <VideoGrid />
    </main>
  );
}

export default Home;
