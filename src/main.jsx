import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Statistics from "./components/StatisticsPage/Statistics";
import AppliedJob from "./components/AppliedJob/AppliedJob";
import JobDetailsPage from "./components/JobDetailsPage/JobDetailsPage";
import BlogPage from "./components/BlogPage/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/job-details",
        element: <JobDetailsPage></JobDetailsPage>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },

      {
        path: "/applied-jobs/:jobsId",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch("data.json"),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
