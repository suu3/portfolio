import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import LayoutContainer from "pages/layout";
const Error = lazy(() => import("./error"));
const About = lazy(() => import("pages/about"));
const Home = lazy(() => import("pages/home"));
const Buddy = lazy(() => import("pages/project/buddy"));
const KnockKnock = lazy(() => import("pages/project/knockknock"));
const Project = lazy(() => import("pages/project"));

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <LayoutContainer />,
      children: [
        { path: "*", element: <Error /> },
        { index: true, element: <Home /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "project",
          children: [
            { index: true, element: <Project /> },
            { path: "buddy", element: <Buddy /> },
            { path: "knockknock", element: <KnockKnock /> },
          ],
        },
      ],
    },
  ]);

  return routes;
}
