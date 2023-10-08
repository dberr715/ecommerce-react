import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import Home, { loader as homeLoader } from "./routes/home";
import Items, { loader as itemLoader } from "./routes/items";
import Categories, { loader as categoryLoader } from "./routes/categories";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      { path: "categories", element: <Categories />, loader: categoryLoader },
      {
        path: "categories/:category",
        element: <Items />,
        loader: itemLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
