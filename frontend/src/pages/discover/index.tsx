import InputModal from "../../components/modal/input";
import styles from "./styles.module.css";
import { ProjectCard } from "../../components/projectCard";

export function Discover() {
    return (
        <div className={styles.container}>
            <main>
                <p className={styles.description}>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</p>

                <div className={styles.input__box}>
                    <div className={styles.div__input}>
                        <InputModal
                            className={styles.input__field}
                            type="search"
                            name="campoInput"
                            id="campoInput"
                            placeholder="Buscar tags "
                        />
                        <label htmlFor="campoInput" className={styles.placeholder_label}>Buscar tags </label>
                    </div>
                </div>

                <section className={styles.gallery}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </section>
            </main>
        </div>
    );
}