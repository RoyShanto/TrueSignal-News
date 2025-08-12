import React from 'react';
import { createBrowserRouter, Link, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import CategoryNews from '../components/CategoryNews/CategoryNews';
import NewsDetail from '../components/NewsDetail/NewsDetail';


const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Navigate to={"category/01"}></Navigate> },
      {
        path: "category/:id",
        Component: CategoryNews,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
      {
        path: "category/:c_id/news/:news_id",
        Component: NewsDetail,
        loader: ({ params }) => 
          // console.log(params)
          fetch(`https://openapi.programming-hero.com/api/news/${params.news_id}`)
      },
    ],
  },
  {
    path: "/about", element: <About />,
  },
  {
    path: "/career", element: <Career />,
  },
  {
    path: "*", element: <>
      <h1 className='text-4xl font-bold text-center'>Error</h1>
      <Link className='btn btn-block bg-amber-500' to={'/'}>Back</Link>
    </>,
  },
]);

export default Routes;