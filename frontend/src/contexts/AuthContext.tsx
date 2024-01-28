import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";

import { api } from "../services/apiClient";
import toast from "react-hot-toast";

type AuthContextData = {
   user: UserProps;
   isAuthenticated: boolean;
   signIn: (credentials: SignInProps) => Promise<void>;
   signOut: () => void;
   signUp: (credentials: SignInProps) => Promise<void>;
};
type UserProps = {
   id: string;
   name: string;
   email: string;
};

type SignInProps = {
   email: string;
   password: string;
};

type signUpProps = {
   name: string;
   sobrenome: string;
   email: string;
   password: string;
};

type AuthProviderProps = {
   children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
   try {
      destroyCookie(undefined, "@SQUAD20.token");
   } catch {
      console.log("erro ao deslogar");
   }
}

export function AuthProvider({ children }: AuthProviderProps) {
   const [user, setUser] = useState<UserProps>();

   const isAuthenticated = !!user;

   useEffect(() => {
      //TENTAR PEGAR ALGO DO TOKEN NO COOKIES

      const { "@Squad20.token": token } = parseCookies();
      if (token) {
         api.get("/me")
            .then((Response) => {
               const { id, name, email } = Response.data;

               setUser({
                  id,
                  name,
                  email,
               });
            })
            .catch(() => {
               // Caiu aqui é porque o token não foi validado
               // então deslogamos o user
               signOut();
            });
      }
   }, []);

   async function signIn({ email, password }: SignInProps) {
      try {
         const response = await api.post("/session", {
            email,
            password,
         });

         const { id, name, token } = response.data;

         setCookie(undefined, "@Squad20.token", token, {
            maxAgr: 60 * 60 * 24 * 30, // expira em 1 mês
            path: "/", //Quais caminhos terão acesso ao cookies
         });
         console.log(response.data);
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
      } catch (err) {
         toast.error("Erro ao fazer o login!", {
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

   async function signUp({ name, sobrenome, email, password }: signUpProps) {
      console.log("CADASTRADO", name, sobrenome, email, password);

      try {
         const response = await api.post("/users", {
            name,
            sobrenome,
            email,
            password,
         });

         console.log(response);
         toast.success("Cadastrado com sucesso!", {
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
      } catch (err) {
         // console.log("erro ao deslogar");
         toast.error("Erro ao fazer o login!", {
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

   return (
      <AuthContext.Provider
         value={{ user, isAuthenticated, signIn, signOut, signUp }}
      >
         {children}
      </AuthContext.Provider>
   );
}
