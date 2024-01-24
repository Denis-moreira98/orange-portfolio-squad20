import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.css";
import { Input } from "../input";
import { Button } from "../button";

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function ModalAddProject({ isOpen, onRequestClose }: ModalProps) {
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
         <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
            style={{
               backgroundColor: "transparent",
               border: 0,
               cursor: "pointer",
            }}
         >
            <FiX size={30} color="#f34748" />
         </button>
         <div className={styles.container}>
            <h4>Adicionar Projeto</h4>
            <div>
               <p>Selecione o conteúdo que você deseja fazer upload</p>
               <div>
                  <h2>FILE IMG</h2>
               </div>
            </div>
            <div>
               <Input />
               <Input />
               <Input />
               <Input />
            </div>
         </div>
         <div>
            <p>Visualizar publicação</p>
            <div>
               <Button>SALVAR</Button>
               <Button>CANCELAR</Button>
            </div>
         </div>
      </Modal>
   );
}
