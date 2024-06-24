import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import App from "./App";
import Child from "./Child";
import { useEffect } from "react";
const routes: RouteObject[] = [
  { path: "/", element: <App /> },
  { path: "/child", element: <Child /> },
];

function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}
const router = createBrowserRouter(routes);
const MyRoutes = () => {
  return (
    <>
      <PageViewTracker />
      <RouterProvider router={router} />;
    </>
  );
};

export default MyRoutes;
