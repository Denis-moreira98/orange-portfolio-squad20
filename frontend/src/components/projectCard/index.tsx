import { Label } from "../modalPreview/label";
import styles from "./styles.module.css";
import avatarDefault from "../../assets/avatarDefault.jpg";

interface ProjectProps {
   title: string;
   midia: string;
   tags: string[];
   userName: string;
   onClick?: () => void;
}

export function ProjectCard({
   title,
   midia,
   tags,
   onClick,
   userName,
}: ProjectProps) {
   return (
      <label onClick={onClick} className={styles.container}>
         <figure className={styles.item}>
            <img src={midia} alt={title} className={styles.capa} />

            <figcaption className={styles.details}>
               <div className={styles.info}>
                  <img
                     src={avatarDefault}
                     alt="Imagem do usuário"
                     className={styles.imgPerfil}
                  />

                  <span>{userName}</span>
                  <span>02/24</span>
               </div>
               <div className={styles.tags}>
                  {tags.map((tag) => (
                     <Label key={tag}>{tag}</Label>
                  ))}
               </div>
            </figcaption>
         </figure>
      </label>
   );
}
