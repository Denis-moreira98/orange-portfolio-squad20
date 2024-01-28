import { ReactNode, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface PrivateProps {
   children: ReactNode;
}

export function Private({ children }: PrivateProps): any {
   const { user } = useContext(AuthContext);

   return !user ? children : <Navigate to="/dashboard" />;
}
