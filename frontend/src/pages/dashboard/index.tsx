import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { FaImages } from "react-icons/fa";
import { ModalAddProject } from "../../components/modal";
import imagePerfil from "../../assets/avatarDefault.jpg";
import Modal from "react-modal";
import InputModal from "../../components/modal/input";
import { Button } from "../../components/button";
import { BiSolidPencil } from "react-icons/bi";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalDelete } from "../../components/modalDelete";
import { ModalEditProject } from "../../components/modalEdit";
// import project from "../../assets/MoreiraPizzas.png";

export function Dashboard() {
   const { user } = useContext(AuthContext);
   const [modalVisible, setModalVisible] = useState(false);
   const [menuAberto, setMenuAberto] = useState(false);
   const [modalDelete, setModalDelete] = useState(false);
   const [modalEdit, setModalEdit] = useState(false);

   function handleOpenModal() {
      setModalVisible(true);
   }
   function handleCloseModal() {
      setModalVisible(false);
   }

   const handleIconClick = () => {
      setMenuAberto(!menuAberto);
   };

   const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(
      null
   );

   //Modal Delete
   const handleDeleteProject = () => {
      setModalDelete(true);
      setOpcaoSelecionada("excluir");

      console;
   };
   function handleCloseModalDelete() {
      setModalDelete(false);
   }

   //modal edit
   function handleEditarProject() {
      setModalEdit(true);
      setOpcaoSelecionada("editar");
   }
   function handleCloseModalEdit() {
      setModalEdit(false);
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
               <div className={styles.adicionar}>
                  <div
                     className={styles.buttondashboardd}
                     onClick={handleOpenModal}
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
               <div className={styles.contianerinfo}>
                  <div className={styles.adicionar2}>
                     <div
                        className={styles.lapisdashboard}
                        onClick={handleIconClick}
                     >
                        <BiSolidPencil />
                        {menuAberto && (
                           <div
                              className={`${styles.menu} ${
                                 opcaoSelecionada === "excluir"
                                    ? styles.excluir
                                    : ""
                              } ${
                                 opcaoSelecionada === "editar"
                                    ? styles.editar
                                    : ""
                              }`}
                           >
                              <button
                                 type="button"
                                 className={styles.ls}
                                 onClick={handleEditarProject}
                              >
                                 Editar
                              </button>
                              <button
                                 type="button"
                                 className={styles.ls}
                                 onClick={handleDeleteProject}
                              >
                                 Excluir
                              </button>
                           </div>
                        )}
                     </div>
                  </div>
                  <figcaption className={styles.detalhes}>
                     <div className={styles.sobre}>
                        <img
                           src={imagePerfil}
                           alt="Imagem do usuário"
                           className={styles.imgPerfil}
                        />
                        <div className={styles.datanome}>
                           {" "}
                           <span>Camila Soares</span>
                           <span className={styles.ponto}>°</span>
                           <span>12/23</span>
                        </div>
                        <div className={styles.tags}>
                           <span>UX</span>
                           <span>web</span>
                        </div>
                     </div>
                  </figcaption>
               </div>
            </div>
         </div>
         {modalVisible && (
            <ModalAddProject
               isOpen={modalVisible}
               onRequestClose={handleCloseModal}
            />
         )}
         {modalEdit && (
            <ModalEditProject
               isOpen={modalEdit}
               onRequestClose={handleCloseModalEdit}
            />
         )}
         {modalDelete && (
            <ModalDelete
               isOpen={modalDelete}
               onRequestClose={handleCloseModalDelete}
            />
         )}
      </>
   );
}
