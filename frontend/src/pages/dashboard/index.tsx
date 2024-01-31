import { useContext, useState } from "react";
import styles from "./styles.module.css";
import MessiImg from "../../assets/leoMessi.webp";
import { FaImages } from "react-icons/fa";
import { ModalAddProject } from "../../components/modal";

import Modal from "react-modal";
import InputModal from "../../components/modal/input";
import { Button } from "../../components/button";
import { AuthContext } from "../../contexts/AuthContext";

export function Dashboard() {
   const { user } = useContext(AuthContext);
   const [modalVisible, setModalVisible] = useState(false);

   function handleOpenModal() {
      setModalVisible(true);
   }
   function handleCloseModal() {
      setModalVisible(false);
   }
   Modal.setAppElement("#root");

   return (
      <>
         <div className={styles.containerdashboard}>
            <div className={styles.perfil}>
               <img className={styles.fotoperfil} src={MessiImg} alt="perfil" />
               <div className={styles.informacoes}>
                  <p className={styles.nome}>{user.name}</p>
                  <p className={styles.pais}>Brasil</p>
                  <Button
                     variant="gray"
                     style={{ color: "#818388" }}
                     onClick={handleOpenModal}
                     type="button"
                  >
                     ADICIONAR PROJETO
                  </Button>
               </div>
            </div>
            <p className={styles.projetos}>Meus projetos</p>
            <InputModal
               className={styles.pesquisa}
               type="search"
               name=""
               id=""
               placeholder="Buscar tags"
            />
            <div className={styles.containerproj}>
               <div className={styles.adicionar}>
                  <button
                     className={styles.buttondashboardd}
                     onClick={handleOpenModal}
                  >
                     <FaImages className={styles.iconedashboard} />
                  </button>
                  <div className={styles.containerp}>
                     <p className={styles.picture__image}>
                        Adicione seu primeiro projeto
                     </p>
                     <p className={styles.picture__image2}>
                        Compartilhe seu talento com milhares de pessoas
                     </p>
                  </div>
               </div>
               {/*   <div className={styles.complemento}></div>
</div>
               <div className={styles.complemento}></div> */}
            </div>
         </div>
         {modalVisible && (
            <ModalAddProject
               isOpen={modalVisible}
               onRequestClose={handleCloseModal}
            />
         )}
      </>
   );
}
