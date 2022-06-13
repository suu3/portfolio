import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import LayoutContainer from "pages/layout";
const Error = lazy(() => import("./error"));
const About = lazy(() => import("pages/about"));
const Skills = lazy(() => import("pages/skills"));
const Home = lazy(() => import("pages/home"));
const Buddy = lazy(() => import("pages/project/buddy"));
const Gymt = lazy(() => import("pages/project/gymt"));
const KnockKnock = lazy(() => import("pages/project/knockknock"));
const Project = lazy(() => import("pages/project"));

export default function Routes() {
  const routes = useRoutes([
    { index: true, element: <Home /> },

    {
      path: "/",
      element: <LayoutContainer />,
      children: [
        { path: "*", element: <Error /> },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "project",
          children: [
            { index: true, element: <Project /> },
            { path: "buddy", element: <Buddy /> },
            { path: "gymt", element: <Gymt /> },
            { path: "knockknock", element: <KnockKnock /> },
          ],
        },
      ],
    },
  ]);

  return routes;
}
