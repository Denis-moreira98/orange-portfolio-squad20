import styles from "./styles.module.css";
import ImgPerfil from "../../assets/image-perfil.png";

import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { Label } from "./label";

interface ModalViewsProps {
   isOpen: boolean;
   onRequestClose: () => void;
   image: string;
   title: string;
   tags: string[];
   description: string;
   link: string;
}

export function ModalPreview({
   isOpen,
   onRequestClose,
   image,
   title,
   tags,
   description,
   link,
}: ModalViewsProps) {
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
               onClick={onRequestClose}
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
                  <h3>{title}</h3>
                  <div className={styles.tag}>
                     {tags.map((tag) => (
                        <Label key={tag}>{tag.toUpperCase()}</Label>
                     ))}
                  </div>
               </div>
               <div className={styles.div_img}>
                  <img src={image} alt="projeto" />
               </div>
               <div className={styles.project}>
                  <p>{description}</p>
                  <div className={styles.link}>
                     <p>Download</p>
                     <a target="_blank" href={link}>
                        {link}
                     </a>
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
}
