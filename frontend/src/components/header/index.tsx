import styles from "./styles.module.css";
import orangeLogo from "../../assets/logo-orange.png";
import imgPerfil from "../../assets/avatarDefault.jpg";
import { IoMenuSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
   const { user, signOut } = useContext(AuthContext);
   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const menuRef = useRef(null);
   const navigate = useNavigate();

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
      if (window.innerWidth > 800) {
         setMenuOpen(false);
      }
   };

   function handleSignOut() {
      signOut();
      navigate("/login");
   }

   useEffect(() => {
      document.addEventListener("click", closeMenuIfClickedOutside);
      window.addEventListener("resize", closeMenuOnResize);

      return () => {
         document.removeEventListener("click", closeMenuIfClickedOutside);
         window.removeEventListener("resize", closeMenuOnResize);
      };
   }, []);

   return (
      <>
         <div>
            <div className={styles.toggle__Menu}>
               <IoMenuSharp
                  className={styles.icon__menu}
                  onClick={toggleMenu}
               />
            </div>
            <header className={styles.header__container}>
               <div className={styles.div__left}>
                  <div className={styles.container__menu}>
                     <Link to="/discover">
                        <img
                           src={orangeLogo}
                           title="Página inicial do Orange Portifólio"
                           alt="Imagem de uma fruta laranja com um texto escrito Orange Portifólio ao lado direito da fruta."
                           className={styles.header__logo}
                        />
                     </Link>
                  </div>
                  <nav className={styles.menu}>
                     <ul>
                        <li>
                           <Link to="/dashboard">Meus projetos</Link>
                        </li>
                        <li>
                           <Link to="/discover">Descobrir</Link>
                        </li>
                     </ul>
                  </nav>
               </div>

               <div className={styles.div__rigth}>
                  <div className={styles.data}>
                     <p>
                        Olá, <span>{user?.name.split(" ")[0]}</span>
                     </p>
                  </div>
                  <Link to="#">
                     <img
                        src={imgPerfil}
                        alt="Imagem do Perfil"
                        className={styles.img__perfil}
                     />
                  </Link>
                  <button
                     onClick={handleSignOut}
                     type="button"
                     className={styles.btn__out}
                  >
                     Sair
                     <MdLogout
                        className={styles.icon__out}
                        title="Sair"
                        size={22}
                     />
                  </button>
               </div>
            </header>
         </div>

         {menuOpen && (
            <nav className={styles.dropdown} ref={menuRef}>
               <ul>
                  <li>
                     <p>
                        Olá, <strong>{user?.name}</strong>
                     </p>
                  </li>
                  <li>
                     <Link to="dashboard">Meus projetos</Link>
                  </li>
                  <li>
                     <Link to="discover">Descobrir</Link>
                  </li>
                  <li className={styles.linha__menu}>
                     <Link to="#">Configurações</Link>
                  </li>
               </ul>
            </nav>
         )}
      </>
   );
}
