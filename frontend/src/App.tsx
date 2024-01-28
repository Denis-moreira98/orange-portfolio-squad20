import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { NotFound } from "./pages/notFound";

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Private } from "./routes/private";

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: "/dashboard",
            element: (
               <Private>
                  <Dashboard />
               </Private>
            ),
         },
      ],
   },

   {
      path: "/",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);

export { router };
