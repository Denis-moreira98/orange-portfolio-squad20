import { useState } from "react";
import styles from "./styles.module.css";
import { BiSolidPencil } from "react-icons/bi";
import { ModalDelete } from "../modalDelete";
import { ModalAddProject } from "../modal";
import { ModalEditProject } from "../../components/modalEdit";
import { Label } from "../modalPreview/label";
import imagePerfil from "../../assets/image-perfil.png";

export function CardLapis() {
  const [modalVisible, setModalVisible] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string | null>(null);

  const handleIconClick = () => {
    setMenuAberto(!menuAberto);
  };

  // Modal Delete
  const handleDeleteProject = () => {
    setModalDelete(true);
    setOpcaoSelecionada("excluir");
  };

  function handleCloseModalDelete() {
    setModalDelete(false);
  }

  // Modal Edit
  function handleEditarProject() {
    setModalEdit(true);
    setOpcaoSelecionada("editar");
  }

  function handleCloseModalEdit() {
    setModalEdit(false);
  }
  function handleCloseModal() {
    setModalVisible(false);
  }
  return (
    <>
      <div className={styles.lapisdashboard} onClick={handleIconClick}>
        <BiSolidPencil />
        {menuAberto && (
          <div
            className={`${styles.menu} ${
              opcaoSelecionada === "excluir" ? styles.excluir : ""
            } ${opcaoSelecionada === "editar" ? styles.editar : ""}`}
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
      <figure className={styles.item}>
        <img
          src="https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2022/10/muitas-laranjas.png.webp"
          alt=""
          className={styles.capa}
        />
        <figcaption className={styles.details}>
          <div className={styles.info}>
            <img
              src={imagePerfil}
              alt="Imagem do usuário"
              className={styles.imgPerfil}
            />
            <div className={styles.dados}>
              {" "}
              <span>Bianca Martin</span>
              <span>02/24</span>
            </div>
          </div>
          <div className={styles.tags}>
            <Label>UI</Label>
            <Label>UI</Label>
          </div>
        </figcaption>
      </figure>
      {modalVisible && (
        <ModalAddProject
          isOpen={modalVisible}
          onRequestClose={() => setModalVisible(false)}
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
      {modalVisible && (
        <ModalAddProject
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
}