import styles from "./styles.module.css";
import orangeLogo from '../../assets/logo-orange.png';
import imagePerfil from '../../assets/image-perfil.png';
import iconNot from '../../assets/icon-notifications.png';

export function Header() {
   return (
      <header className={styles.container}>         
            <div className={styles.divLinks}>
               
               <img src={orangeLogo} 
                     alt="Logo Orange Portifólio" 
                     className={styles.headerLogo} />

               <div>
                  <a href="#">Meus projetos</a>
                  <a href="#">Descobrir</a>
               </div>
            </div>

            <div className={styles.divRitgh}>
               <a href="#">
                  <img src={imagePerfil} 
                        alt="Imagem do Perfil" 
                        className={styles.imgPerfil} />
               </a>
               <a href="#">
                  <img src={iconNot} 
                           alt="Icone de notificação" 
                           className={styles.imgNot} />
               </a>
               
            </div>          
         </header>
      
   );
}
