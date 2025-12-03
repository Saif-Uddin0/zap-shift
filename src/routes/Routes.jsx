import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Root from '../Layout/Root';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        Component: Home,
      },
    ]
  },
]);
