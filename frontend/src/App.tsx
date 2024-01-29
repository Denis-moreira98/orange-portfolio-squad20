import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashboard";
import { NotFound } from "./pages/notFound";

import { createBrowserRouter } from "react-router-dom";
import { Private } from "./routes/private";
import { Descobrir } from "./pages/descobrir";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";

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
         {
            path: "/descobrir",
            element: (
               <Private>
                  <Descobrir />
               </Private>
            ),
         },
      ],
   },

   {
      path: "/",
      element: (
         <>
            <Home />
         </>
      ),
   },
   {
      path: "/login",
      element: (
         <>
            <Login />
         </>
      ),
   },

   {
      path: "/register",
      element: (
         <>
            <Register />,
         </>
      ),
   },
   {
      path: "*",
      element: (
         <>
            <NotFound />,
         </>
      ),
   },
]);

export { router };
