import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
      </div>
  );
}

export default App;
