import styles from "./styles.module.css";
// import ImgProject from "../../assets/project.png";
import ImgPerfil from "../../assets/image-perfil.png";

import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { Label } from "../label";
import { ModalSuccess } from "../modalSuccess";
import { useState } from "react";

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
   image: string;
}

export function ModalPreview({ isOpen, onRequestClose, image }: ModalProps) {
   const [modalVisible, setModalVisible] = useState(false);

   function handleOpenModal() {
      setModalVisible(true);
   }
   function handleCloseModal() {
      setModalVisible(false);
   }

   const customStyles = {
      content: {
         top: "50%",
         bottom: "auto",
         left: "50%",
         right: "auto",
         padding: "30px",
         transform: "translate(-50%, -50%)",
         backgroundColor: "#FEFEFE",
      },
   };

   Modal.setAppElement("#root");

   return (
      <>
         <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
         >
            <button
               type="button"
               onClick={handleOpenModal}
               className="react-modal-close"
               style={{
                  backgroundColor: "transparent",
                  border: 0,
                  cursor: "pointer",
                  float: "right",
               }}
            >
               <FiX size={30} color="#323232" />
            </button>
            <div className={styles.container}>
               <h3 className={styles.div_h3}>Ecommerce One Page</h3>
               <div className={styles.content}>
                  <div className={styles.info}>
                     <img src={ImgPerfil} alt="perfil" />
                     <div className={styles.nome}>
                        <p>Camila Soares</p>
                        <span>12/12</span>
                     </div>
                  </div>
                  <h3>Ecommerce One Page</h3>
                  <div className={styles.tag}>
                     <Label>UI</Label>
                     <Label>WEB</Label>
                  </div>
               </div>
               <div className={styles.div_img}>
                  <img src={image} alt="projeto" />
               </div>
               <div className={styles.project}>
                  <p>
                     Temos o prazer de compartilhar com vocês uma variação da
                     nosso primeiro recurso gratuito, Monoceros. É um modelo de
                     uma página para mostrar seus produtos. Tentamos redesenhar
                     uma versão mais B2C e minimalista do nosso primeiro
                     template de e-commerce.
                  </p>
                  <div className={styles.link}>
                     <p>Download</p>
                     <a
                        target="_blank"
                        href="https://denis-moreira-portfolio.vercel.app/"
                     >
                        https://denis-moreira-portfolio.vercel.app/
                     </a>
                  </div>
               </div>
            </div>
         </Modal>
         {modalVisible && (
            <ModalSuccess
               isOpen={modalVisible}
               onRequestClose={handleCloseModal}
            />
         )}
      </>
   );
}
