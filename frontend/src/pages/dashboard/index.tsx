import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FaImages } from "react-icons/fa";
import { ModalAddProject } from "../../components/modal";
import imagePerfil from "../../assets/avatarDefault.jpg";
import Modal from "react-modal";
import InputModal from "../../components/modal/input";
import { Button } from "../../components/button";
import { AuthContext } from "../../contexts/AuthContext";

import { CardLapis } from "../../components/cardLapis";
import { setupAPIClient } from "../../services/api";
import { Loading } from "../../components/loading";

interface ProjectsUserProps {
   idProject: string;
   title: string;
   tags: string;
   linkProject: string;
   description: string;
   midia: string;
}

export function Dashboard() {
   const { user } = useContext(AuthContext);
   const [modalVisible, setModalVisible] = useState(false);
   const [projects, setProjects] = useState<ProjectsUserProps[]>([]);
   const [loading, setLoading] = useState(true);
   const [originalProjects, setOriginalProjects] = useState<
      ProjectsUserProps[]
   >([]);
   const [search, setSearch] = useState("");
   const searchUpperCase = search.toUpperCase();

   function handleOpenModal() {
      setModalVisible(true);
   }
   function handleCloseModal() {
      setModalVisible(false);
   }

   Modal.setAppElement("#root");

   useEffect(() => {
      async function getProject() {
         try {
            const apiClient = setupAPIClient();
            const response = await apiClient.get(`/user/${user.id}`);

            setProjects(response.data.projects);
            setOriginalProjects(response.data.projects);
            setLoading(false);
         } catch (err) {
            console.log(err);
         }
      }

      getProject();
   }, []);

   useEffect(() => {
      if (search.trim() !== "") {
         const filteredProjects = originalProjects.filter((project) =>
            project.tags.toUpperCase().includes(searchUpperCase)
         );

         setProjects(filteredProjects);
      } else {
         setProjects(originalProjects);
      }
   }, [search, originalProjects, searchUpperCase]);

   return (
      <>
         {loading ? (
            <Loading />
         ) : (
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
                  autoComplete="off"
                  className={styles.pesquisa}
                  type="search"
                  name="campoInput"
                  id="campoInput"
                  placeholder="Buscar tags "
                  onChange={(e) => setSearch(e.target.value)}
               />
               {projects.length > 0 ? (
                  <div className={styles.containerproj}>
                     {projects.map((project) => (
                        <div
                           key={project.idProject}
                           className={styles.adicionar2}
                        >
                           <CardLapis
                              key={project.idProject}
                              userName={user?.name}
                              tags={project.tags.split(" ")}
                              idProject={project.idProject}
                              midia={project.midia}
                           />
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className={styles.adicionar} onClick={handleOpenModal}>
                     <div className={styles.buttondashboardd}>
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
               )}
            </div>
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
