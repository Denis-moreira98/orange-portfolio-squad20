import Modal from "react-modal";
import styles from "./styles.module.css";

import { Button } from "../button";
import InputModal, { TextArea } from "../modal/input/index";
import { ChangeEvent, FormEvent, useState } from "react";
import { FaImages } from "react-icons/fa";

import { ModalEditSuccess } from "../modalEditSuccess";

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function ModalEditProject({ isOpen, onRequestClose }: ModalProps) {
   const [modalSuccessVisible, setModalSuccessVisible] = useState(false);

   // states do form
   const [title, setTitle] = useState("");
   const [tags, setTags] = useState("");
   const [link, setLink] = useState("");
   const [description, setDescription] = useState("");
   // const [arrayDeTags, setArrayDeTags] = useState([]);

   // const handleChangeTags = (event) => {
   //    setTags(event.target.value);

   //    const tagsProntas = tags.split(" ");

   //    setArrayDeTags(tagsProntas);
   // };

   function handleRegisterProject(e: FormEvent) {
      e.preventDefault();
   }

   //Modal Success
   function handleOpenModalSuccess(e: FormEvent) {
      e.preventDefault();

      setTimeout(() => {
         setModalSuccessVisible(true);
      }, 800);
   }
   function handleCloseModalSuccess() {
      setModalSuccessVisible(false);
   }

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
               <h4>Editar projeto </h4>
               <form onSubmit={handleRegisterProject}>
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
                        <InputModal
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           placeholder="Título"
                        />
                        <InputModal
                           value={tags}
                           onChange={(e) => setTags(e.target.value)}
                           placeholder="Tags"
                        />
                        <InputModal
                           value={link}
                           onChange={(e) => setLink(e.target.value)}
                           placeholder="Link"
                        />
                        <TextArea
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}
                           placeholder="Descrição"
                        />
                     </div>
                  </div>
                  <div className={styles.div_button}>
                     <div className={styles.div_buttons}>
                        <Button
                           onClick={handleOpenModalSuccess}
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
         {modalSuccessVisible && (
            <ModalEditSuccess
               isOpen={modalSuccessVisible}
               onRequestClose={handleCloseModalSuccess}
            />
         )}
      </>
   );
}
