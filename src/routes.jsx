import React from "react";

const Homepage = React.lazy(() => import("./views/homepage/index"));
const AboutUspage = React.lazy(() => import("./views/aboutus/index"));
const MusicTherapy = React.lazy(() => import("./views/musicTherapy/index"));
const TherapyDetail = React.lazy(() => import("./views/musicTherapy/therapy_Detail/index"));
const Contactus = React.lazy(() => import("./views/contactUs/index"));
const ErrorPage = React.lazy(() => import("./views/errorPage/Error"))
const Blog = React.lazy(() => import("./views/blog/index"))
const Blog_Detail = React.lazy(() => import("./views/blog/blogDetail/index"))
const Gallery = React.lazy(() => import("./views/Gallery/index"))
const Cources = React.lazy(() => import("./views/courses/index"))
const Cources_Detail = React.lazy(() => import("./views/courses/courseDetails/index"))
const AudioPage = React.lazy(() => import("./views/courses/audio/index"))
const Products = React.lazy(() => import("./views/products/index"))
const ProductDetail = React.lazy(() => import("./views/products/productDetail/index"))

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
    path: "/gallery",
    name: "Gallery",
    element: Gallery
  },
  {
    path: "/blog",
    name: "Blog",
    element: Blog
  },
  {
    path: "/blog/:blogid",
    name: "Blog detail",
    element: Blog_Detail
  },
  {
    path: "/cources",
    name: "Cources",
    element: Cources
  },
  {
    path: "/cources/:courcesid",
    name: "Cources detail",
    element: Cources_Detail
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: Contactus
  },
  {
    path: "/product",
    name: "Products",
    element: Products
  },
  {
    path: "/product/:productid",
    name: "product detail",
    element: ProductDetail
  },
  {
    path: "/error",
    name: "Error",
    element: ErrorPage
  },
  {
    path: "/audio",
    name: "Audio Page",
    element: AudioPage
  }
];

export default routes;