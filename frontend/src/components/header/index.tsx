
import styles from "./styles.module.css";
import orangeLogo from "../../assets/logo-orange.png";
import imagePerfil from "../../assets/image-perfil.png";

import { IoMenuSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

import React, { useState, useEffect, useRef } from "react";

export function Header() {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const menuRef = useRef(null);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };
   
   return (
      <>
         <div>
            <header className={styles.header__container}>
               <div className={styles.div__left} >
                  <div className={styles.container__menu} ref={menuRef}>
                     <IoMenuSharp className={styles.icon__menu}  onClick={toggleMenu} />
                     <img src={orangeLogo}
                        alt="Logo Orange Portifólio"
                        className={styles.header__logo} />
                  </div>
                  <nav className={styles.menu}>
                     <ul>
                        <li><a href="#">Meus projetos</a></li>
                        <li><a href="#">Descobrir</a></li>
                     </ul>
                  </nav>
               </div>

               <div className={styles.div__rigth}>
                  <a href="#">
                     <img src={imagePerfil}
                        alt="Imagem do Perfil"
                        className={styles.img__perfil} />
                  </a>
                  <IoIosNotifications className={styles.img__notifications} />

               </div>
            </header>
         </div>

         {menuOpen && (   
            <nav className={styles.dropdown} ref={menuRef}>
               <ul>
                  <li><a href="#">Meus projetos</a></li>
                  <li><a href="#">Descobrir</a></li>
                  <li className={styles.linha__menu}><a href="#" >Configurações</a></li>
               </ul>
            </nav>
         )}
      </>
   );
}
