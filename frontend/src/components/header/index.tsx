
import styles from "./styles.module.css";
import orangeLogo from "../../assets/logo-orange.png";
import imagePerfil from "../../assets/image-perfil.png";

import { IoMenuSharp } from "react-icons/io5";
// import { IoIosNotifications } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export function Header() {
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const menuRef = useRef(null);

   // const toggleMenu = () => {
   //    setMenuOpen(!menuOpen);
   // };
   const toggleMenu = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
      event.stopPropagation();
      setMenuOpen(!menuOpen);
   };

   const closeMenuIfClickedOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
         setMenuOpen(false);
      }
   };

   const closeMenuOnResize = () => {
      // fechar o menu se > 800 px
      if (window.innerWidth > 800) {
         setMenuOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener('click', closeMenuIfClickedOutside);
      window.addEventListener('resize', closeMenuOnResize);

      return () => {
         document.removeEventListener('click', closeMenuIfClickedOutside);
         window.removeEventListener('resize', closeMenuOnResize);
      };
   }, []);

   return (
      <>
         <div>
            <div className={styles.toggle__Menu}>
               <IoMenuSharp className={styles.icon__menu} onClick={toggleMenu} />
            </div>
            <header className={styles.header__container}>

               <div className={styles.div__left} >
                  <div className={styles.container__menu} >
                     <Link to="/">
                        <img src={orangeLogo} title="Página inicial do Orange Portifólio"
                           alt="Imagem de uma fruta laranja com um texto escrito Orange Portifólio ao lado direito da fruta."
                           className={styles.header__logo} />
                     </Link>
                  </div>
                  <nav className={styles.menu}>
                     <ul>
                        <li><Link to="/">Meus projetos</Link></li>
                        <li><Link to="discover">Descobrir</Link></li>
                     </ul>
                  </nav>
               </div>

               <div className={styles.div__rigth}>
                  <div className={styles.data}>
                     <p>Olá, <span>Camila soares</span> </p>
                  </div>
                  <Link to="#">
                     <img src={imagePerfil}
                        alt="Imagem do Perfil"
                        className={styles.img__perfil} />
                  </Link>
                  {/* <IoIosNotifications className={styles.img__notifications} title="Notificações" /> */}
                  <button className={styles.btn__out}>
                     <FaSignOutAlt className={styles.icon__out} title="Sair" size={27} />
                  </button>

               </div>
            </header>
         </div>

         {menuOpen && (
            <nav className={styles.dropdown} ref={menuRef}>
               <ul>
                  <li><strong>Camila Soares</strong></li>
                  <li><Link to="/">Meus projetos</Link></li>
                  <li><Link to="discover">Descobrir</Link></li>
                  <li className={styles.linha__menu}><Link to="#">Configurações</Link></li>
                  <li>
                     <button className={styles.btn__outDrop}>
                        <FaSignOutAlt className={styles.icon__outDrop} title="Sair" size={20} />
                     </button>
                  </li>
               </ul>
            </nav>
         )}
      </>
   );
}
