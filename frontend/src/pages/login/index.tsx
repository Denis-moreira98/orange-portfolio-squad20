import { Input } from "../../components/input";
import styles from "./styles.module.css";
import imgLogin from "../../assets/imglogin.png";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function Login() {
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
                     required
                     className={styles.input}
                  />
                  <Input
                     label="Password"
                     type="password"
                     required
                     className={styles.input}
                  />
                  <Button>ENTRAR</Button>
               </form>
               <Link to="/register">
                  <p>Cadastre-se</p>
               </Link>
            </div>
         </div>
      </div>
   );
}
