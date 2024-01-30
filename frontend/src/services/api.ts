import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenErrors } from "./errors/AuthTokenErrors";

import { signOut } from "../contexts/AuthContext";

export function setupAPIClient(ctx = undefined) {
   const cookies = parseCookies(ctx);
   const apiUrl = import.meta.env.VITE_API_URL;

   const api = axios.create({
      baseURL: apiUrl,
      headers: {
         Authorization: `Bearer ${cookies["@Squad20.token"]}`,
      },
   });

   api.interceptors.response.use(
      (response) => {
         return response;
      },
      (error: AxiosError) => {
         if (error.response.status === 401) {
            //Qualquer erro 401 (não autorizado) devemos deslogar o usuario

            // eslint-disable-next-line valid-typeof
            if (typeof window !== undefined) {
               // chamar a função para deslogar usuario
               signOut();
            } else {
               return Promise.reject(new AuthTokenErrors());
            }
         }
         return Promise.reject(error);
      }
   );

   return api;
}
