import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { FaImages } from "react-icons/fa";
import { ModalAddProject } from "../../components/modal";
import imagePerfil from "../../assets/avatarDefault.jpg";
import Modal from "react-modal";
import InputModal from "../../components/modal/input";
import { Button } from "../../components/button";
import { AuthContext } from "../../contexts/AuthContext";

// import project from "../../assets/MoreiraPizzas.png";
import {CardLapis} from "../../components/cardLapis"

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
               <img
                  className={styles.fotoperfil}
                  src={imagePerfil}
                  alt="perfil"
               />
               <div className={styles.informacoes}>
                  <p className={styles.nome}>{user?.name}</p>
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
               <div className={styles.adicionar} onClick={handleOpenModal}>
                  <div
                     className={styles.buttondashboardd}
                  >
                     <FaImages className={styles.iconedashboard} />
                  </div>
                  <div className={styles.containerp}>
                     <p className={styles.picture__image}>
                        Adicione seu primeiro projeto
                     </p>
                     <p className={styles.picture__image2}>
                        Compartilhe seu talento com milhares de pessoas
                     </p>
                  </div>
               </div>
            
                  <div className={styles.adicionar2}>
                  <CardLapis/>
                  </div>
                  <div className={styles.adicionar2}>
                  <CardLapis/>
                  </div>
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