import InputModal from "../../components/modal/input";
import styles from "./styles.module.css";
import { ProjectCard } from "../../components/projectCard";
import { useEffect, useState } from "react";
import { setupAPIClient } from "../../services/api";
import { ModalPreview } from "../../components/modalPreview";

export interface ProjectsProps {
   idProject: string;
   title: string;
   tags: string;
   linkProject: string;
   description: string;
   userId: string | number;
   midia: string;
}

export function Discover() {
   const [projects, setProjects] = useState<ProjectsProps[]>([]);
   const [openModalPreview, setOpenModalPreview] = useState(false);
   const [selectedProject, setSelectedProject] = useState<ProjectsProps | null>(
      null
   );

   useEffect(() => {
      async function getProject() {
         try {
            const apiClient = setupAPIClient();
            const response = await apiClient.get("/project/all");

            setProjects(response.data);
         } catch (err) {
            console.log(err);
         }
      }

      getProject();
   }, []);

   // Abre o modal e define o projeto selecionado
   function handleOpenModal(project: ProjectsProps) {
      setSelectedProject(project);
      setOpenModalPreview(true);
   }

   // Fecha o modal e limpa o projeto selecionado
   function handleCloseModalPreview() {
      setSelectedProject(null);
      setOpenModalPreview(false);
   }
   return (
      <>
         <div className={styles.container}>
            <main>
               <p className={styles.description}>
                  Junte-se à comunidade de inovação, inspiração e descobertas,
                  transformando experiências em conexões inesquecíveis
               </p>

               <div className={styles.input__box}>
                  <div className={styles.div__input}>
                     <InputModal
                        className={styles.input__field}
                        type="search"
                        name="campoInput"
                        id="campoInput"
                        placeholder="Buscar tags "
                     />
                     <label
                        htmlFor="campoInput"
                        className={styles.placeholder_label}
                     >
                        Buscar tags{" "}
                     </label>
                  </div>
               </div>

               <section className={styles.gallery}>
                  {projects.map((project) => (
                     <ProjectCard
                        key={project.idProject}
                        title={project.title}
                        midia={project.midia}
                        tags={project.tags.split(" ")}
                        onClick={() => handleOpenModal(project)}
                     />
                  ))}
               </section>
            </main>
         </div>
         {openModalPreview && selectedProject && (
            <ModalPreview
               title={selectedProject.title}
               tags={selectedProject.tags.split(" ")}
               link={selectedProject.linkProject}
               description={selectedProject.description}
               image={selectedProject.midia}
               isOpen={openModalPreview}
               onRequestClose={handleCloseModalPreview}
            />
         )}
      </>
   );
}
