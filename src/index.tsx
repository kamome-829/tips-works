import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import JobComponent from "./components/JobComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/job/:jobId",
    element: <JobComponent />,
  },
]);

root.render(
  <React.StrictMode>
    <MenuBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
