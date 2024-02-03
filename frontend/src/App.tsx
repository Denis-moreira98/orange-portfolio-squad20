import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { Discover } from "./pages/discover";
import { NotFound } from "./pages/notFound";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";

import { Private } from "./routes/private";

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: "/dashboard",
            element: (
               <Private>
                  <Dashboard />,
               </Private>
            ),
         },
         {
            path: "/discover",
            element: (
               <Private>
                  <Discover />
               </Private>
            ),
         },
      ],
   },
   {
      path: "*",
      element: <NotFound />,
   },
   {
      path: "/",
      element: <Home />,
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
