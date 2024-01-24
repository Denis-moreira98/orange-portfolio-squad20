import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
/* import React, { useState } from "react"; */

export function Dashboard() {
/*   const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (e) => {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
        setImageSrc(readerTarget.result);
      });

      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  }; */
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
          <button className={styles.button} type="button">
            ADICIONAR PROJETO
          </button>
        </div>
      </div>
      <p className={styles.projetos}>Meus projetos</p>
      <input
        className={styles.pesquisa}
        type="search"
        name=""
        id=""
        placeholder="Buscar tags"
      />
      <div>
      <div className={styles.adicionar}>
      <FontAwesomeIcon icon={faImages} style={{ color: "#000000" }} className={styles.icone} />
            <span className={styles.picture__image}>Adicione seu primeiro projeto</span>
            <span className={styles.picture__image}>Compartilhe seu talento com milhares de pessoas</span>

      </div>
      <div className={styles.complemento}></div>

      <div className={styles.complemento}></div>
      </div>
{/*   <label className={styles.picture} htmlFor={styles.picture__input} tabIndex={0}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Imagem"
            className={styles.picture__img}
            style={{ width: '389px', height: '258px' }}
          />
        ) : (
          <>
            <FontAwesomeIcon icon={faImages} style={{ color: "#000000" }} className={styles.icone} />
            <span className={styles.picture__image}>Adicione seu primeiro projeto</span>
            <span className={styles.picture__image}>Compartilhe seu talento com milhares de pessoas</span>
          </>
        )}
      </label>
      <input
        type="file"
        name="picture__input"
        id={styles.picture__input}
        onChange={handleFileChange}
      /> */}
    </div>
  );
}
