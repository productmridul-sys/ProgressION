import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Overview } from "./pages/Overview";
import { Clients } from "./pages/Clients";
import { Demographics } from "./pages/Demographics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "clients", Component: Clients },
      { path: "demographics", Component: Demographics },
    ],
  },
]);