import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
