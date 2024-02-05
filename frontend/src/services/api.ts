import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenErrors } from "./errors/AuthTokenErrors";

import { signOut } from "../contexts/AuthContext";

export function setupAPIClient(ctx = undefined) {
   const apiUrl = import.meta.env.VITE_API_URL;
   const api = axios.create({
      baseURL: apiUrl,
   });

   api.interceptors.request.use((config) => {
      const cookies = parseCookies(ctx);

      const routesWithoutAuthorization = ["/login", "/user/new"];

      if (!routesWithoutAuthorization.includes(config.url)) {
         config.headers.Authorization = `Bearer ${cookies["@Squad20.token"]}`;
      }

      return config;
   });

   api.interceptors.response.use(
      (response) => {
         return response;
      },
      async (error: AxiosError) => {
         const { response } = error;

         if (response) {
            if (response.status === 401) {
               if (typeof window !== "undefined") {
                  signOut();
               } else {
                  return Promise.reject(new AuthTokenErrors());
               }
            } else if (response.status === 403) {
               console.error("Erro de permissão:", error);
            } else {
               console.error("Erro desconhecido:", error);
            }
         } else {
            console.error("Erro de rede:", error);
         }

         return Promise.reject(error);
      }
   );

   return api;
}
