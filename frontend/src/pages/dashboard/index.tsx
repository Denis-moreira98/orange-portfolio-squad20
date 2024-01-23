import styles from "./styles.module.css";

export function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.perfil}>
        <img
          className={styles.fotoperfil}
          src="https://s3-alpha-sig.figma.com/img/0b59/6e07/52e969b0f04cacb1f6ff5ba506b04f1c?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pzGS-mTalYHFx6gxtH8vHGGFRYsIy7-LbQ8J5K9Z6orB3MdAqRJZl04irgdTeVyzKKR2KRPmQ39xALSJYOMAkI4VV6onO8gkcKdCe60~Qhq9HKDIW5rUsHYd8qMZSm3Mdo659TDqsJiSZPQ4~kERmMsvR90GjLuXyMquviS3ZA6QAxkDpcWmA1prQO7QyQa7hNRUdBLDHUKspDLK6Z9v9-ddV8y0jVVBJkRMDPXnXLo7tN-ycmPmsVKL6CHfW8n0-9Qzfmzljxgypr~CTG3wb8pVjhKxEKj-zL1r1psb30-axOhK~mce0-pysqEVZzwoT9kd89ts4NPoaD-qaauRWQ__"
          alt=""
        />
        <div className={styles.informacoes}>
          <p className={styles.nome}>Camila Soares</p>
          <p className={styles.pais}>Brasil</p>
          <button className={styles.button} type="button">ADICIONAR PROJETO</button>
        </div>
      </div>
    </div>
  );
}
