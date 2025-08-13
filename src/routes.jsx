import { element } from "prop-types";
import React from "react";

const Homepage = React.lazy(() => import("./views/homepage/index"));

const routes = [
  {
    path: "/",
    name: "Home",
    element: Homepage,
  },
];

export default routes;