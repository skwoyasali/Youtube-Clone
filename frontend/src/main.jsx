import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import VideoPlayer from "./Pages/VideoPlayer.jsx";
import Register from "./Pages/Register.jsx";
import Upload  from "./Pages/Upload.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SidebarProvider>
        <App />
      </SidebarProvider>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/register",
        element: <Register />
      },
      {
        path:"/upload",
        element:<Upload /> 
      },
      {
        path:"/videoplayer/:id",
        element: <VideoPlayer />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
);
