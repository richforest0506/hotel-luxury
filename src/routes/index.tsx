import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home.layout";
import HomePage from '../pages/home';
import FacilitiesPage from "../pages/facilities";
import RoomsPage from "../pages/rooms";
import ContactPage from "../pages/contact";
import base_url from "./url";



const Navigator = () => {
  const element = useRoutes([
    {
      path: base_url,
      element: <HomeLayout />,
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: base_url + 'facilities',
          element: <FacilitiesPage />
        }
        ,
        {
          path: base_url + 'rooms',
          element: <RoomsPage />
        }
        ,
        {
          path: base_url + 'contact_us',
          element: <ContactPage />
        }
      ]
    },
  ]);

  return element;
}

export default Navigator;
