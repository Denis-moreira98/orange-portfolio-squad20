import { Label } from "../modalPreview/label";
import styles from "./styles.module.css";
import imagePerfil from "../../assets/image-perfil.png";


export function ProjectCard() {
   return (
      <figure className={styles.item}>
         <img src="https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2022/10/muitas-laranjas.png.webp" alt="" className={styles.capa} />
         <figcaption className={styles.details}>
            <div className={styles.info}>
               <img src={imagePerfil} alt="Imagem do usuário" className={styles.imgPerfil} />
               <span>Bianca Martin</span>
               <span>02/24</span>
            </div>
            <div className={styles.tags}>
               <Label>UI</Label>
            </div>
         </figcaption>
      </figure>
   );
}
