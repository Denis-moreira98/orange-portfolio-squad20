import { Input } from "../../components/input";
import styles from "./styles.module.css";
import ImgCadastro from "../../assets/imgcadastro.png";
import { Button } from "../../components/button";
import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function Register() {
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
            <img src={ImgCadastro} alt="imagem cadastro" />
         </div>
         <div className={styles.content}>
            <h3>Cadastre-se</h3>

            <div className={styles.form}>
               <form>
                  <div className={styles.name}>
                     <Input label="Nome*" type="text" required />
                     <Input label="Sobrenome*" type="text" required />
                  </div>
                  <Input label="Email address" type="email" required />
                  <Input
                     label="Password"
                     type={mostrarSenha ? "text" : "password"}
                     name="senha"
                     value={senha}
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
                  <Button variant="orange" className={styles.btnRegister}>
                     CADASTRAR
                  </Button>
               </form>
            </div>
         </div>
      </div>
   );
}
