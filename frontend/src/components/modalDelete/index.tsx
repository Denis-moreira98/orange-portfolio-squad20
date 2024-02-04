import styles from "./styles.module.css";

import Modal from "react-modal";
import { Button } from "../button";
import { ModalDeleteSuccess } from "../modalDeleteSuccess";
import { useState } from "react";
import { setupAPIClient } from "../../services/api";

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
   idProject: string;
}

Modal.setAppElement("#root");

export function ModalDelete({ isOpen, onRequestClose, idProject }: ModalProps) {
   const [modalDeleteSuccess, setModalDeleteSuccess] = useState(false);

   function handleOpenModalDelete() {
      setModalDeleteSuccess(true);
   }

   async function handleDeleteProject(idProject: string) {
      try {
         const apiClient = setupAPIClient();
         await apiClient.delete(`/project/${idProject}`);

         handleOpenModalDelete();
      } catch (error) {
         console.log(error);
      }
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

   return (
      <>
         <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
         >
            <div className={styles.container}>
               <h3>Deseja Excluir?</h3>
               <p>Se você prosseguir irá excluir o projeto do seu portfólio</p>
               <div className={styles.div_btn}>
                  <Button
                     variant="orange"
                     type="button"
                     onClick={() => handleDeleteProject(idProject)}
                  >
                     EXCLUIR
                  </Button>
                  <Button
                     type="button"
                     onClick={onRequestClose}
                     className="react-modal-close"
                     style={{ color: "#818388" }}
                     variant="gray"
                  >
                     CANCELAR
                  </Button>
               </div>
            </div>
         </Modal>
         {modalDeleteSuccess && (
            <ModalDeleteSuccess
               isOpen={modalDeleteSuccess}
               onRequestClose={onRequestClose}
            />
         )}
      </>
   );
}
