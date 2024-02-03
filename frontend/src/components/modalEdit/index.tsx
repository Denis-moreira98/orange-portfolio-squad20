import Modal from "react-modal";
import styles from "./styles.module.css";
import { Button } from "../button";
import InputModal, { TextArea } from "../modal/input/index";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { FaImages } from "react-icons/fa";
import { ModalEditSuccess } from "../modalEditSuccess";
import { validateEspecialChars } from "../../utils/validations";
import { ModalPreview } from "../modalPreview";
import { AuthContext } from "../../contexts/AuthContext";
import { setupAPIClient } from "../../services/api";
import toast from "react-hot-toast";

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}

export function ModalEditProject({ isOpen, onRequestClose }: ModalProps) {
   const { user } = useContext(AuthContext);
   const [modalPreviewVisible, setModalPreviewVisible] = useState(false);
   const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
   const [avatarUrl, setAvatarUrl] = useState("");
   const [imageAvatar, setImageAvatar] = useState(null);
   const [title, setTitle] = useState("");
   const [tags, setTags] = useState("");
   const [arrayDeTags, setArrayDeTags] = useState([]);
   const [errorChars, SetErrorChars] = useState(false);
   const [link, setLink] = useState("");
   const [description, setDescription] = useState("");

   //Modal Success
   function handleOpenModalSuccess() {
      setModalSuccessVisible(true);
   }

   //ModalPreview
   function handleOpenModalPreview() {
      if (!validateForm()) {
         return;
      }
      const tagsSeparadas = tags.split(" ");
      setArrayDeTags(tagsSeparadas);
      setModalPreviewVisible(true);
   }
   function handleCLoseModalPreview() {
      setModalPreviewVisible(false);
   }

   function validateForm() {
      if (
         title === "" ||
         tags === "" ||
         link === "" ||
         description === "" ||
         imageAvatar === null
      ) {
         toast.error("Preencha todos os campos!");
         return false;
      } else if (validateEspecialChars.test(tags)) {
         SetErrorChars(true);
         return false;
      }

      SetErrorChars(false);
      return true;
   }

   //Limpa states
   function handleClearStates() {
      setTitle("");
      setLink("");
      setTags("");
      setDescription("");
      setImageAvatar(null);
      setAvatarUrl("");
   }

   async function handleEditProject(event: FormEvent) {
      event.preventDefault();

      try {
         const data = new FormData();
         if (!validateForm()) {
            return;
         }

         const { id } = user;
         const projectData = {
            title,
            tags,
            linkProject: link,
            description,
            userProject: {
               idUser: id.toString(),
            },
         };

         data.append(
            "project",
            new Blob([JSON.stringify(projectData)], {
               type: "application/json",
            })
         );
         data.append("file", imageAvatar);

         const apiClient = setupAPIClient();
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         const response = await apiClient.put("/project/edit/10", data, {
            headers: { "Content-Type": "multipart/form-data" },
         });

         handleClearStates();
         handleOpenModalSuccess();
      } catch (err) {
         console.log(err);
      }
   }

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
               <form onSubmit={handleEditProject}>
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
                        {errorChars && (
                           <p
                              style={{
                                 color: "#ff4433",
                                 fontSize: "14px",
                                 marginTop: "-9px",
                                 marginLeft: "5px",
                                 marginBottom: "-7px",
                                 fontWeight: "500",
                              }}
                           >
                              Separe as tags apenas com espaço, sem caracteres
                              especiais!
                           </p>
                        )}
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
                     <button
                        className={styles.btn_view}
                        type="button"
                        onClick={handleOpenModalPreview}
                     >
                        Visualizar publicação
                     </button>
                     <div className={styles.div_buttons}>
                        <Button type="submit" variant="orange">
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
         {modalPreviewVisible && (
            <ModalPreview
               title={title}
               tags={arrayDeTags}
               link={link}
               description={description}
               image={avatarUrl}
               isOpen={modalPreviewVisible}
               onRequestClose={handleCLoseModalPreview}
            />
         )}
         {modalSuccessVisible && (
            <ModalEditSuccess
               isOpen={modalSuccessVisible}
               onRequestClose={onRequestClose}
            />
         )}
      </>
   );
}
