import styles from "./styles.module.css";
import orangeLogo from "../../assets/logo-orange.png";
import imagePerfil from "../../assets/image-perfil.png";

import { IoMenuSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

import { useState, useEffect } from "react";

export function Header() {
   const [menuOpen, setMenuOpen] = useState<boolean>(true);
   useEffect(() => {
      window.addEventListener("resize", () => {
         if (window.innerWidth >= 800) {
            setMenuOpen(false);
         }
      });
   }, []);

   return (
      <>
         <div>
            <header className={styles.header__container}>
               <div className={styles.divRigth}>
                  <div className={styles.container__menu}>
                     <IoMenuSharp
                        className={styles.icon__menu}
                        onClick={() => {
                           setMenuOpen(!menuOpen);
                        }}
                     />
                     <img
                        src={orangeLogo}
                        alt="Logo Orange Portifólio"
                        className={styles.header__logo}
                     />
                  </div>
                  <nav className={styles.menu}>
                     <ul>
                        <li>
                           <a href="#">Meus projetos</a>
                        </li>
                        <li>
                           <a href="#">Descobrir</a>
                        </li>
                     </ul>
                  </nav>
               </div>

               <div className={styles.div__left}>
                  <a href="#">
                     <img
                        src={imagePerfil}
                        alt="Imagem do Perfil"
                        className={styles.img__perfil}
                     />
                  </a>
                  <IoIosNotifications className={styles.img__notifications} />
               </div>
            </header>
         </div>

         {menuOpen && (
            <nav className={styles.dropdown}>
               <ul>
                  <li>
                     <a href="#">Meus projetos</a>
                  </li>
                  <li>
                     <a href="#">Descobrir</a>
                  </li>
                  <li className={styles.linha__menu}>
                     <a href="#">Configurações</a>
                  </li>
                  <li></li>
               </ul>

               {/* <div><a href="#">Meus projetos</a></div>
            <div><a href="#">Descobrir</a></div>
            <div><a href="#">Configurações</a></div>
            <div></div> */}
            </nav>
         )}
      </>
   );
}
