import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Child from "./Child";
const routes: RouteObject[] = [
  { path: "/", element: <App /> },
  { path: "/child", element: <Child /> },
];

const router = createBrowserRouter(routes);
const MyRoutes = () => {
  gtag;
  return <RouterProvider router={router} />;
};

export default MyRoutes;
