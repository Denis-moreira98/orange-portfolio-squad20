import styles from "./styles.module.css";


export function Homepage() {
  return (
    <>
      <div className={styles.containerhome}>
        <nav className={styles.navhome}>
          <ul className={styles.ulhome}>
            <li className={styles.lihome}>
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/692217/1694801416/$9dhg0ggifvi"
                alt=""
              />
            </li>
            <li className={styles.balaofala}>Torne-se um de Nós</li>
          </ul>

          <ul className={styles.ulhome}>
            <li className={styles.lihome}>
              <button className={styles.buttonhome}>Login</button>
            </li>
            <li className={styles.lihome}>
              <button className={styles.buttonhome}>Cadastro</button>
            </li>
          </ul>
        </nav>

        <main>
          <section className={styles.sectionhome}>
            <div className={styles.divhome}>
              <h1>Catalogue seus Projetos</h1>
              <p>
                Crie, exiba e compartilhe seu portfólio de projetos de maneira
                intuitiva, conectando-se a uma comunidade de mentes criativas e
                mantendo-se informado sobre as últimas tendências em design e
                desenvolvimento.
              </p>
              <button className={styles.buttonhome}>Iniciar Jornada</button>
            </div>

            <div className={styles.divhome}>
              <img
                src="https://d335luupugsy2.cloudfront.net/cms/files/692217/1701269107/$x8r9ctcwosj"
                alt=""
              />
            </div>
          </section>
        </main>

        <footer>
          <div>
            <p>Torne-se o protagonista da sua história e faça parte da comunidade tech mais vitaminada!</p>
          </div>

          <div className={styles.partners}>
            <img
              src="https://i.pinimg.com/originals/49/72/6e/49726e65f6b35c2e8e366a16c0734fb7.png"
              alt=""
            />
            <img
              src="https://www.resilia.com.br/wp-content/uploads/2021/08/logo.png"
              alt=""
            />

            <img src="https://pngimg.com/d/github_PNG15.png" alt="" />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Klabin.svg/2560px-Klabin.svg.png"
              alt=""
            />

            <img
              src="https://storage.googleapis.com/atados-v3/user-uploaded/images/e8d4e9bf-6096-49a9-81e4-a39bb0bfec77.png"
              alt=""
            />

            <img
              src="https://ajustes.org.br/wp-content/uploads/2019/12/2018-07-05-17-39-54-logo-unimed-png-e1576232236210.png"
              alt=""
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Bancopanlogo.png"
              alt=""
            />

            <img src="https://images.sympla.com.br/5aec9652c823d.png" alt="" />
          </div>
        </footer>
      </div>
    </>
  );
}
