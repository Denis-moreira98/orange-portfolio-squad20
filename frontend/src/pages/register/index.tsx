import { Input } from "../../components/input";
import styles from "./styles.module.css";
import ImgCadastro from "../../assets/imgcadastro.png";
import { Button } from "../../components/button";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const scheme = z.object({
   name: z.string().nonempty("O campo nome é obrigatório"),
   sobrenome: z.string().nonempty("O campo sobrenome é obrigatório"),
   email: z
      .string()
      .email("Insira um email válido")
      .nonempty("O campo email é obrigatório"),
   password: z
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres")
      .nonempty("O campo de senha é obrigatório"),
});

type FormData = z.infer<typeof scheme>;

export function Register() {
   const [senha, setSenha] = useState("");
   const [mostrarSenha, setMostrarSenha] = useState(false);

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

   function handleRegister(data: FormData) {
      console.log(data);
   }

   return (
      <div className={styles.container}>
         <div className={styles.div_img}>
            <img src={ImgCadastro} alt="imagem cadastro" />
         </div>
         <div className={styles.content}>
            <h3>Cadastre-se</h3>

            <div className={styles.form}>
               <form onSubmit={handleSubmit(handleRegister)}>
                  <div className={styles.name}>
                     <Input
                        label="Nome*"
                        type="text"
                        name="name"
                        error={errors.name?.message}
                        register={register}
                     />
                     <Input
                        label="Sobrenome*"
                        type="text"
                        name="sobrenome"
                        error={errors.sobrenome?.message}
                        register={register}
                     />
                  </div>
                  <Input
                     name="email"
                     label="Email address"
                     type="email"
                     error={errors.email?.message}
                     register={register}
                  />
                  <Input
                     label="Password"
                     type={mostrarSenha ? "text" : "password"}
                     name="password"
                     value={senha}
                     onChange={(e) => setSenha(e.target.value)}
                     error={errors.password?.message}
                     register={register}
                  />
                  <button
                     className={styles.button_view}
                     type="button"
                     onClick={handleToggleSenha}
                  >
                     {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <Button variant="orange" className={styles.btnRegister}>
                     CADASTRAR
                  </Button>
               </form>
            </div>
         </div>
      </div>
   );
}
