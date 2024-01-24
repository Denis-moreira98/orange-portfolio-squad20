import styles from "./styles.module.css";
import orangeLogo from '../../assets/logo-orange.png';
import imagePerfil from '../../assets/image-perfil.png';
import iconNot from '../../assets/icon-notifications.png';
import iconMenu from '../../assets/Icon-menu.svg';

import React, { useState, useEffect } from "react";

export function Header() {
   const [menuOpen, setMenuOpen] = useState <boolean>(true);
   useEffect( () => {
      window.addEventListener('resize', () => {
         if(window.innerWidth >= 800) {
            setMenuOpen(false)
         }
      })
   }, [])

   return (
      <>
      <header className={styles.container}>

         <div className={styles.divRigth}> 
            <div className={styles.container__menu}>
               <img src={iconMenu} alt="ìcone do menu" 
                    className={styles.icon__menu}
                    onClick={()=> { setMenuOpen(!menuOpen)}}/> 
               
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

      {menuOpen && (

         <nav className={styles.teste} >
               <ul>
               <li><a href="#">Meus projetos</a></li>
               <li><a href="#">Descobrir</a></li>
               <li><a href="#">Configurações</a></li>
               <li></li>  
            </ul>                
         </nav>
      )}

      </>
   );
}
