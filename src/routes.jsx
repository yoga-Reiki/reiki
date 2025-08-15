import { element } from "prop-types";
import React from "react";

const Homepage = React.lazy(() => import("./views/homepage/index"));
const AboutUspage = React.lazy(() => import("./views/aboutus/index"));

const routes = [
  {
    path: "/",
    name: "Home",
    element: Homepage,
  },
  {
    path: "/about",
    name: "About",
    element: AboutUspage,
  }
];

export default routes;