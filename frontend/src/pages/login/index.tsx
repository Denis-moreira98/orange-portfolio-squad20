import { Input } from "../../components/input";
import styles from "./styles.module.css";
import imgLogin from "../../assets/imglogin.png";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const scheme = z.object({
   email: z
      .string()
      .email("Insira um email válido")
      .nonempty("O campo email é obrigatório"),
   password: z.string().nonempty("O campo senha é obrigatório"),
});

type FormData = z.infer<typeof scheme>;

export function Login() {
   const [mostrarSenha, setMostrarSenha] = useState(false);
   const [senha, setSenha] = useState("");

   const handleToggleSenha = () => {
      setMostrarSenha(!mostrarSenha);
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: zodResolver(scheme),
      mode: "onChange",
   });

   function onSubmit(data: FormData) {
      console.log(data);
   }

   return (
      <div className={styles.container}>
         <div className={styles.div_img}>
            <img src={imgLogin} alt="imagem login" />
         </div>
         <div className={styles.content}>
            <h3>Entre no Orange Portfólio</h3>

            <div className={styles.form}>
               <h4>Faça Login com email</h4>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.inputEmail}>
                     <Input
                        label="Email address"
                        type="email"
                        name="email"
                        error={errors.email?.message}
                        register={register}
                     />
                  </div>
                  <div className={styles.inputPassword}>
                     <Input
                        label="Password"
                        type={mostrarSenha ? "text" : "password"}
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha}
                        name="password"
                        error={errors.password?.message}
                        register={register}
                     />
                     {mostrarSenha ? (
                        <FaEyeSlash
                           onClick={handleToggleSenha}
                           style={{ cursor: "pointer" }}
                        />
                     ) : (
                        <FaEye
                           onClick={handleToggleSenha}
                           style={{ cursor: "pointer" }}
                        />
                     )}
                  </div>
                  <Button type="submit" variant="orange">
                     ENTRAR
                  </Button>
               </form>
               <Link to="/register">
                  <p>Cadastre-se</p>
               </Link>
            </div>
         </div>
      </div>
   );
}
