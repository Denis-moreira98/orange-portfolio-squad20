import styles from "./styles.module.css";
import vite from "../../assets/vite.svg";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import imgBanner from "../../assets/$x8r9ctcwosj.png";

export function Home() {
   return (
      <>
         <div className={styles.containerhome}>
            <nav className={styles.navhome}>
               <ul className={styles.ulhome}>
                  <li>
                     <img src={vite} alt="logo laranja" />
                  </li>
                  <li className={styles.balaofala}>Torne-se um de Nós</li>
               </ul>

               <ul className={styles.ulhome}>
                  <li>
                     <Link to="/login">
                        <button className={styles.buttonhome}>LOGIN</button>
                     </Link>
                  </li>
                  <li className={styles.lihome} id={styles.idl}>
                     <Link to="/register">
                        <button className={styles.buttonhome}>CADASTRO</button>
                     </Link>
                  </li>
               </ul>
            </nav>

            <main>
               <section className={styles.sectionhome}>
                  <div className={styles.divhome}>
                     <h3>
                        <Typewriter
                           words={["Catalogue seus Projetos!"]}
                           loop={Infinity}
                           cursor
                           cursorStyle="|"
                           typeSpeed={80}
                           deleteSpeed={50}
                           delaySpeed={1200}
                        />
                     </h3>
                     <p>
                        Crie, exiba e compartilhe seu portfólio de projetos de
                        maneira intuitiva, conectando-se a uma comunidade de
                        mentes criativas e mantendo-se informado sobre as
                        últimas tendências em design e desenvolvimento.
                     </p>

                     <Link to="/register">
                        <button className={styles.buttonhome}>
                           COMEÇAR AGORA
                        </button>
                     </Link>
                  </div>

                  <div className={styles.divhome}>
                     <img src={imgBanner} alt="banner" />
                  </div>
               </section>
            </main>
            <footer>
               <div>
                  <p>
                     Torne-se o protagonista da sua história e faça parte da
                     comunidade tech mais vitaminada!
                  </p>
               </div>
            </footer>
         </div>
      </>
   );
}
