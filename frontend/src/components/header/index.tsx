import styles from "./styles.module.css";
import orangeLogo from '../../assets/logo-orange.png';
import imagePerfil from '../../assets/image-perfil.png';
import iconNot from '../../assets/icon-notifications.png';
import iconMenu from '../../assets/Icon-menu.svg';

export function Header() {
   return (
      <>
      <header className={styles.container}>

         <div className={styles.divRigth}> 
            <div className={styles.container__menu}>
               <img src={iconMenu} alt="ìcone do menu" className={styles.icon__menu}/> 
               <img src={orangeLogo} 
                  alt="Logo Orange Portifólio" 
                  className={styles.headerLogo} />
            </div>              
            <nav className={styles.menu}>
                  <ul>
                     <li><a href="#">Meus projetos</a></li>
                     <li><a href="#">Descobrir</a></li>
                  </ul>                
            </nav>
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
      </>
   );
}
