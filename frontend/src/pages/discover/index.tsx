import InputModal from "../../components/modal/input";
import styles from "./styles.module.css";
import { ProjectCard } from "../../components/projectCard";
import { useEffect, useState } from "react";
import { setupAPIClient } from "../../services/api";
import { ModalPreview } from "../../components/modalPreview";
import { Loading } from "../../components/loading";

interface ProjectsProps {
   idProject: string;
   title: string;
   tags: string;
   linkProject: string;
   description: string;
   userId: string | number;
   userName: string;
   midia: string;
}

export function Discover() {
   const [projects, setProjects] = useState<ProjectsProps[]>([]);
   const [originalProjects, setOriginalProjects] = useState<ProjectsProps[]>(
      []
   );
   const [openModalPreview, setOpenModalPreview] = useState(false);
   const [selectedProject, setSelectedProject] = useState<ProjectsProps | null>(
      null
   );
   const [search, setSearch] = useState("");
   const searchUpperCase = search.toUpperCase();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function getProject() {
         try {
            const apiClient = setupAPIClient();
            const response = await apiClient.get("/project/all");

            setProjects(response.data);
            setOriginalProjects(response.data);
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

   function handleOpenModal(project: ProjectsProps) {
      setSelectedProject(project);
      setOpenModalPreview(true);
   }

   function handleCloseModalPreview() {
      setSelectedProject(null);
      setOpenModalPreview(false);
   }
   return (
      <>
         {loading ? (
            <Loading />
         ) : (
            <div className={styles.container}>
               <main>
                  <p className={styles.description}>
                     Junte-se à comunidade de inovação, inspiração e
                     descobertas, transformando experiências em conexões
                     inesquecíveis
                  </p>

                  <div className={styles.input__box}>
                     <div className={styles.div__input}>
                        <InputModal
                           autoComplete="off"
                           className={styles.input__field}
                           type="search"
                           name="campoInput"
                           id="campoInput"
                           placeholder="Buscar tags "
                           onChange={(e) => setSearch(e.target.value)}
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
                           userName={project.userName}
                           midia={project.midia}
                           tags={project.tags.split(" ")}
                           onClick={() => handleOpenModal(project)}
                        />
                     ))}
                  </section>
               </main>
            </div>
         )}
         {openModalPreview && selectedProject && (
            <ModalPreview
               userName={selectedProject.userName}
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
