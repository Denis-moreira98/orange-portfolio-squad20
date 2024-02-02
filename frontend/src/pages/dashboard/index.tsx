import { useContext, useState } from "react";
import styles from "./styles.module.css";
import MessiImg from "../../assets/leoMessi.webp";
import { FaImages } from "react-icons/fa";
import { ModalAddProject } from "../../components/modal";
import imagePerfil from "../../assets/image-perfil.png";

import Modal from "react-modal";
import InputModal from "../../components/modal/input";
import { Button } from "../../components/button";
import { AuthContext } from "../../contexts/AuthContext";

import { BiSolidPencil } from "react-icons/bi";
export function Dashboard() {
   const { user } = useContext(AuthContext);
   const [modalVisible, setModalVisible] = useState(false);

  function handleOpenModal() {
    setModalVisible(true);
  }
  function handleCloseModal() {
    setModalVisible(false);
  }
  Modal.setAppElement("#root");

   return (
      <>
         <div className={styles.containerdashboard}>
            <div className={styles.perfil}>
               <img className={styles.fotoperfil} src={MessiImg} alt="perfil" />
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
               </div>
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
              <div className={styles.lapisdashboard} onClick={handleIconClick}>
                <BiSolidPencil />
                {menuAberto && (
                  <div
                    className={`${styles.menu} ${
                      opcaoSelecionada === "excluir" ? styles.excluir : ""
                    } ${opcaoSelecionada === "editar" ? styles.editar : ""}`}
                  >
                    <button className={styles.ls} onClick={handleEditarClick}>
                      Editar
                    </button>
                    <button
                      className={styles.ls}
                      onClick={handleExcluirClicado}
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
    </>
  );
}
