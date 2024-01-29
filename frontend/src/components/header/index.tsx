
import styles from "./styles.module.css";
import orangeLogo from "../../assets/logo-orange.png";
import imagePerfil from "../../assets/image-perfil.png";

import { IoMenuSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

import { useState } from "react";

export function Header() {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <>
         <div>
            <header className={styles.header__container}>
               <div className={styles.div__left} >
                  <div className={styles.container__menu} >
                     <IoMenuSharp className={styles.icon__menu} onClick={toggleMenu} />
                     <a href="/">
                        <img src={orangeLogo} title="Página inicial do Orange Portifólio"
                           alt="Imagem de uma fruta laranja com um texto escrito Orange Portifólio ao lado direito da fruta."
                           className={styles.header__logo} />
                     </a>
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
                  {/* <IoIosNotifications className={styles.img__notifications} title="Notificações" /> */}
                  <button className={styles.btn__out}>
                     <FaSignOutAlt className={styles.icon__out} title="Sair" />
                  </button>

               </div>
            </header>
         </div>

         {menuOpen && (
            <nav className={styles.dropdown} >
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
