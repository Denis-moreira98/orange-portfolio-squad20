import { Input } from "../../components/input";
import styles from "./styles.module.css";
import imgLogin from "../../assets/imglogin.png";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function Login() {
   const [senha, setSenha] = useState("");
   const [mostrarSenha, setMostrarSenha] = useState(false);

   const handleInputChange = (e: FormEvent) => {
      // @ts-expect-error valor do state
      setSenha(e.target.value);
   };

   const handleToggleSenha = () => {
      setMostrarSenha(!mostrarSenha);
   };
   return (
      <div className={styles.container}>
         <div className={styles.div_img}>
            <img src={imgLogin} alt="imagem login" />
         </div>
         <div className={styles.content}>
            <h3>Entre no Orange Portfólio</h3>

            <div className={styles.form}>
               <h4>Faça Login com email</h4>
               <form>
                  <Input
                     label="Email address"
                     type="email"
                     placeholder="Digite seu email"
                     required
                  />
                  <Input
                     label="Password"
                     type={mostrarSenha ? "text" : "password"}
                     name="senha"
                     value={senha}
                     placeholder="Digite sua senha"
                     onChange={handleInputChange}
                     required
                  />
                  <button
                     className={styles.button_view}
                     type="button"
                     onClick={handleToggleSenha}
                  >
                     {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <Button variant="orange">ENTRAR</Button>
               </form>
               <Link to="/register">
                  <p>Cadastre-se</p>
               </Link>
            </div>
         </div>
      </div>
   );
}
