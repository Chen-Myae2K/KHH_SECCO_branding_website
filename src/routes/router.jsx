import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../components/layout";
import HomePage from "../features/home/pages/HomePage";
import AboutPage from "../features/about/pages/AboutPage";
import ProcessPage from "../features/process/pages/ProcessPage";
import ContactPage from "../features/contact/pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      {
        path:"/process",
        element: <ProcessPage/>,
      },
      {
        path:"/contact",
        element: <ContactPage/>
      }
    ],
  },
]);

export default router;
