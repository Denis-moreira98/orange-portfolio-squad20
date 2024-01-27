import Modal from "react-modal";
import styles from "./styles.module.css";

import { Button } from "../button";
import InputModal, { TextArea } from "./input/index";
import { ChangeEvent, useState } from "react";
import { FaImages } from "react-icons/fa";

// import { ModalView } from "../modalView";

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function ModalAddProject({ isOpen, onRequestClose }: ModalProps) {
   // const [modalVisible, setModalVisible] = useState(false);

   // function handleOpenModal(e: FormEvent) {
   //    e.preventDefault();

   //    setTimeout(() => {
   //       setModalVisible(true);
   //    }, 800);
   // }
   // function handleCloseModal() {
   //    setModalVisible(false);
   // }

   const [avatarUrl, setAvatarUrl] = useState("");
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [imageAvatar, setImageAvatar] = useState(null);

   function handleFile(e: ChangeEvent<HTMLInputElement>) {
      if (!e.target.files) {
         return;
      }
      const image = e.target.files[0];

      if (!image) {
         return;
      }
      if (image.type === "image/jpeg" || image.type === "image/png") {
         setImageAvatar(image);
         setAvatarUrl(URL.createObjectURL(e.target.files[0]));
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
   Modal.setAppElement("#root");
   return (
      <>
         <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
         >
            <div className={styles.div_container}>
               <h4>Adicionar Projeto</h4>
               <form>
                  <div className={styles.content}>
                     <div className={styles.div_text}>
                        <div className={styles.div_file}>
                           <p>
                              Selecione o conteúdo que você deseja fazer upload
                           </p>
                           <label className={styles.labelAvatar}>
                              <span>
                                 <FaImages size={35} color="#323232" />
                              </span>
                              <input
                                 type="file"
                                 accept="image/png, image/jpeg"
                                 onChange={handleFile}
                              />

                              {avatarUrl && (
                                 <img
                                    className={styles.preview}
                                    src={avatarUrl}
                                    alt="foto do produto"
                                    width={120}
                                    height={100}
                                 />
                              )}
                           </label>
                        </div>
                     </div>
                     <div className={styles.div_input}>
                        <InputModal placeholder="Título" />
                        <InputModal placeholder="Tags" />
                        <InputModal placeholder="Link" />
                        <TextArea placeholder="Descrição" />
                     </div>
                  </div>
                  <div className={styles.div_button}>
                     <p>Visualizar publicação</p>
                     <div className={styles.div_buttons}>
                        <Button
                           // onClick={handleOpenModal}
                           type="submit"
                           variant="orange"
                        >
                           SALVAR
                        </Button>
                        <Button
                           type="button"
                           onClick={onRequestClose}
                           className="react-modal-close"
                           variant="gray"
                           style={{ color: "#818388" }}
                        >
                           CANCELAR
                        </Button>
                     </div>
                  </div>
               </form>
            </div>
         </Modal>
         {/* {modalVisible && (
            <ModalView
               image={avatarUrl}
               isOpen={modalVisible}
               onRequestClose={handleCloseModal}
            />
         )} */}
      </>
   );
}
