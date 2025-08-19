import { element } from "prop-types";
import React from "react";

const Homepage = React.lazy(() => import("./views/homepage/index"));
const AboutUspage = React.lazy(() => import("./views/aboutus/index"));
const MusicTherapy = React.lazy(() => import("./views/musicTherapy/index"));
const TherapyDetail = React.lazy(() => import("./views/musicTherapy/therapy_Detail/index"));
const Contactus = React.lazy(() => import("./views/contactUs/index"));
const ErrorPage = React.lazy(() => import("./views/errorPage/Error"))

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
  },
  {
    path: "/music-therapy",
    name: "Music Therapy",  
    element: MusicTherapy
  },
  {
    path: "/therapy-detail",
    name: "Therapy Detail",
    element: TherapyDetail
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: Contactus
  },
  {
    path: "/error",
    name: "Error",
   element: ErrorPage
  }
];

export default routes;