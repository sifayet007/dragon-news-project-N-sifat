// src/router/index.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error 404: Page not found</h1>,
  },
]);

export default router;
