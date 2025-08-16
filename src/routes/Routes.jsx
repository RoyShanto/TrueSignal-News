import React from 'react';
import { createBrowserRouter, Link, Navigate } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';
import CategoryNews from '../components/CategoryNews/CategoryNews';
import NewsDetail from '../components/NewsDetail/NewsDetail';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AuthLayout from '../layouts/AuthLayout';


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
      {
        path: "/about", element: <About />,
      },
      {
        path: "/career", element: <Career />,
      },
      {
        path: "/careers/apply/:id", element: <h1 className='font-bold text-4xl text-cyan-500 text-center mt-40'>Time SeS..! 🤪 </h1>,
      },
      {
        path: "/careers/general-application", element: <h1 className='font-bold text-4xl text-cyan-500 text-center mt-40'>Time SeS..! 🤪</h1>,
      },
    ],
  },
  {
    path: "/auth", element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to={"/auth/login"}></Navigate> },
      {
        path: "register", element: <Register />,
      },
      {
        path: "login", element: <Login />,
      },
    ]
  },

  {
    path: "*", element: <>
      <h1 className='text-4xl font-bold text-center'>Error</h1>
      <Link className='btn btn-block bg-amber-500' to={'/'}>Back</Link>
    </>,
  },
]);

export default Routes;