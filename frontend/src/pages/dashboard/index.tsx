import styles from "./styles.module.css";
import log from "../../assets/imgcadastro.png"

export function Dashboard() {
   return (
      <div className={styles.container}>
         <div className="">
            <img src={log} alt="" />
            <h2>Camila Soares</h2>
            <p>Brasil</p>
            <button type="button">ADICIONAR PROJETO</button>
         </div>
      </div>
   );
}
