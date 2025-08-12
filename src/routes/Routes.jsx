import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
]);

export default Routes;