// src/router/index.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="category/01" replace />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <h1>lOgin</h1>,
      },
      {
        path: "/auth/register",
        element: <h2>Register</h2>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error 404: Page not found</h1>,
  },
]);

export default router;
