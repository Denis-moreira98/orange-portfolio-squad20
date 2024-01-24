import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { NotFound } from "./pages/notFound";

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Dashboard />,
         },
         {
            path: "*",
            element: <NotFound />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
]);

export { router };