import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>
);
