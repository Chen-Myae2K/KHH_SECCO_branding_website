import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../features/home/pages/HomePage";
import AboutPage from "../features/about/pages/AboutPage";
import ProcessPage from "../features/process/pages/ProcessPage";
import ContactPage from "../features/contact/pages/ContactPage";
import Layout from "../components/Layout";

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
