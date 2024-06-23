import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Child from "./Child.tsx";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const routes: RouteObject[] = [
  { path: "/", element: <App /> },
  { path: "/child", element: <Child /> },
];

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
