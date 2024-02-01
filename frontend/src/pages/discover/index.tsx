import InputModal from "../../components/modal/input";
import imagePerfil from "../../assets/image-perfil.png";
import styles from "./styles.module.css";

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
                        <figure className={styles.item}>
                            <img src="https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2022/10/muitas-laranjas.png.webp" alt="" className={styles.capa} />
                            <figcaption className={styles.details}>
                                <div className={styles.info}>
                                    <img  src={imagePerfil} alt="Imagem do usuário" className={styles.imgPerfil}/>
                                    <span>Bianca Martin</span>
                                    <span>02/24</span>
                                </div>
                                <div className={styles.tags}>
                                    <span>frontend</span>
                                    <span>UX</span>
                                </div>
                            </figcaption>
                        </figure>

                        <figure className={styles.item}>
                            <img src="https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2022/10/muitas-laranjas.png.webp" alt="" className={styles.capa} />
                            <figcaption className={styles.details}>
                                <div className={styles.info}>
                                    <img  src={imagePerfil} alt="Imagem do usuário" className={styles.imgPerfil}/>
                                    <span>Bianca Martin</span>
                                    <span>02/24</span>
                                </div>
                                <div className={styles.tags}>
                                    <span>tag</span>
                                </div>
                            </figcaption>
                        </figure>

                        <figure className={styles.item}>
                            <img src="https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2022/10/muitas-laranjas.png.webp" alt="" className={styles.capa} />
                            <figcaption className={styles.details}>
                                <div className={styles.info}>
                                    <img  src={imagePerfil} alt="Imagem do usuário" className={styles.imgPerfil}/>
                                    <span>Bianca Martin</span>
                                    <span>02/24</span>
                                </div>
                                <div className={styles.tags}>
                                    <span>tag</span>
                                </div>
                            </figcaption>
                        </figure>

                        <figure className={styles.item}>
                            <img src="https://minhasaude.proteste.org.br/wp-content/webp-express/webp-images/uploads/2022/10/muitas-laranjas.png.webp" alt="" className={styles.capa} />
                            <figcaption className={styles.details}>
                                <div className={styles.info}>
                                    <img  src={imagePerfil} alt="Imagem do usuário" className={styles.imgPerfil}/>
                                    <span>Bianca Martin</span>
                                    <span>02/24</span>
                                </div>
                                <div className={styles.tags}>
                                    <span>tag</span>
                                </div>
                            </figcaption>
                        </figure>
                </section>
            </main>
        </div>
    );
}