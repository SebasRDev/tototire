import Image from "next/image";

import styles from "../../styles/pages/Nosotros.module.css";

export const AboutUsItem = ({ img, title, description, size }) => {
  return (
    <div className={`${styles.about__us__item} ${styles[size]}`}>
      <div className={styles.image__wrapper}>
        <Image
          layout="fixed"
          src={img}
          alt={title}
          width={size == "large" ? 450 : 80}
          height={size == "large" ? 230 : 80}
        />
      </div>
      <div>
        <h3 className={styles.title__item}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
