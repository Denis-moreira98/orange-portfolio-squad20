import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { jwtDecode } from "jwt-decode";
import { api } from "../services/apiClient";
import toast from "react-hot-toast";

type AuthContextData = {
   user: UserProps;
   loadingAuth: boolean;
   signed: boolean;
   signIn: (credentials: SignInProps) => Promise<any>;
   signOut: () => any;
   signUp: (credentials: SignInProps) => Promise<any>;
};
type UserProps = {
   id: number | string;
   name: string;
   email: string;
};

type SignInProps = {
   email: string;
   password: string;
};

type signUpProps = {
   name: string;
   email: string;
   password: string;
};

type AuthProviderProps = {
   children: ReactNode;
};

interface JwtPayload {
   sub: string;
   name: string;
   email: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
   try {
      destroyCookie(undefined, "@Squad20.token");
   } catch {
      console.log("erro ao deslogar");
   }
}

export function AuthProvider({ children }: AuthProviderProps) {
   const [user, setUser] = useState<UserProps | null>();
   const [loadingAuth, setLoadingAuth] = useState(true);

   useEffect(() => {
      try {
         // Tentar pegar algo do token no cookies
         const { "@Squad20.token": token } = parseCookies();
         if (token) {
            const decoded: JwtPayload = jwtDecode(token);
            const { sub, name, email } = decoded;

            setUser({
               id: sub,
               name: name,
               email: email,
            });
            setLoadingAuth(false);
         } else {
            setUser(null);
            setLoadingAuth(false);
         }
      } catch (error) {
         console.error(error);
         signOut();
      }
   }, []);

   async function signIn({ email, password }: SignInProps) {
      try {
         const response = await api.post("/login", {
            email,
            password,
         });

         const { id, name, token } = response.data;

         setCookie(undefined, "@Squad20.token", token, {
            maxAgr: 60 * 60 * 24 * 5, // expira em 5 dias
            path: "/",
         });

         setUser({
            id,
            name,
            email,
         });

         //Passar para proximas requisições o token
         api.defaults.headers["Authorization"] = `Bearer ${token}`;

         toast.success("Logado com sucesso!", {
            duration: 3000,
            style: {
               border: "1px solid rgba(58, 58, 58, 0.219)",
               padding: "8px",
               color: "#fff",
               backgroundColor: "#2E7D32",
            },
            iconTheme: {
               primary: "#fff",
               secondary: "#2E7D32",
            },
         });

         return response.data;
      } catch (err) {
         console.log(err);
         toast.error("Email ou senha incorretos!", {
            duration: 3000,
            style: {
               border: "1px solid rgba(58, 58, 58, 0.219)",
               padding: "8px",
               color: "#fff",
               backgroundColor: "#bb0000",
            },
            iconTheme: {
               primary: "#fff",
               secondary: "#bb0000",
            },
         });
      }
   }

   async function signUp({ name, email, password }: signUpProps) {
      try {
         const response = await api.post("/user/new", {
            name,
            email,
            password,
         });
         toast.success("Cadastrado com sucesso!", {
            duration: 2000,
            style: {
               border: "1px solid rgba(58, 58, 58, 0.219)",
               padding: "8px",
               color: "#fff",
               backgroundColor: "#2E7D32",
            },
            iconTheme: {
               primary: "#fff",
               secondary: "#2E7D32",
            },
         });

         return response;
      } catch (err) {
         console.log(err.message);
         toast.error("Algo inesperado aconteceu, tente novamente!", {
            duration: 2000,
            style: {
               border: "1px solid rgba(58, 58, 58, 0.219)",
               padding: "8px",
               color: "#fff",
               backgroundColor: "#bb0000",
            },
            iconTheme: {
               primary: "#fff",
               secondary: "#bb0000",
            },
         });
      }
   }

   return (
      <AuthContext.Provider
         value={{
            signed: !!user,
            user,
            loadingAuth,
            signIn,
            signOut,
            signUp,
         }}
      >
         {children}
      </AuthContext.Provider>
   );
}
