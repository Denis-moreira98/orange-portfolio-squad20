import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.css";

import Modal from "react-modal";
import { Button } from "../button";

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function ModalEditSuccess({ isOpen, onRequestClose }: ModalProps) {
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
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         style={customStyles}
      >
         <div className={styles.container}>
            <h3>Edição concluída com sucesso!</h3>
            <FaCheckCircle color="green" size={40} />
            <a href="/dashboard">
               <Button
                  type="button"
                  onClick={onRequestClose}
                  className="react-modal-close"
                  variant="orange"
               >
                  VOLTAR PARA PROJETOS
               </Button>
            </a>
         </div>
      </Modal>
   );
}
