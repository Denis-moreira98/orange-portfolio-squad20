import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface PrivateProps {
   children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
   const { signed, isAuthenticated } = useContext(AuthContext);

   if (isAuthenticated) {
      return <div>FAÇA LOGIN PARA CONTINUAR</div>;
   }
   if (!signed) {
      return <Navigate to="/dashboard" />;
   }

   return children;
}
