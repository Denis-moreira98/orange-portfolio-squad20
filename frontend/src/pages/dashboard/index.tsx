import { useContext, useState } from "react";
import styles from "./styles.module.css";

import { FaImages } from "react-icons/fa";
import { ModalAddProject } from "../../components/modal";

import Modal from "react-modal";
import InputModal from "../../components/modal/input";
import { Button } from "../../components/button";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
   const { user, signOut } = useContext(AuthContext);
   const [modalVisible, setModalVisible] = useState(false);
   const navigate = useNavigate();

   function handleOpenModal() {
      setModalVisible(true);
   }
   function handleCloseModal() {
      setModalVisible(false);
   }
   Modal.setAppElement("#root");

   function handleSignOut() {
      signOut();
      navigate("/login");
   }

   return (
      <>
         <div className={styles.containerdashboard}>
            <div className={styles.perfil}>
               <img
                  className={styles.fotoperfil}
                  src="https://s3-alpha-sig.figma.com/img/0b59/6e07/52e969b0f04cacb1f6ff5ba506b04f1c?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzGS-mTalYHFx6gxtH8vHGGFRYsIy7-LbQ8J5K9Z6orB3MdAqRJZl04irgdTeVyzKKR2KRPmQ39xALSJYOMAkI4VV6onO8gkcKdCe60~Qhq9HKDIW5rUsHYd8qMZSm3Mdo659TDqsJiSZPQ4~kERmMsvR90GjLuXyMquviS3ZA6QAxkDpcWmA1prQO7QyQa7hNRUdBLDHUKspDLK6Z9v9-ddV8y0jVVBJkRMDPXnXLo7tN-ycmPmsVKL6CHfW8n0-9Qzfmzljxgypr~CTG3wb8pVjhKxEKj-zL1r1psb30-axOhK~mce0-pysqEVZzwoT9kd89ts4NPoaD-qaauRWQ__"
                  alt="perfil"
               />
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
                  <Button variant="orange" onClick={handleSignOut}>
                     SAIR
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
