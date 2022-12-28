import Image from "next/image";
import ReactMarkdown from "react-markdown";

import styles from "../../pages/servicios/Servicios.module.css";

export const ServiceSlide = ({ title, description, img }) => {
  return (
    <>
      <div className={styles.bg__img}>
        <Image
          priority
          className={styles.image__slider__desk}
          layout="responsive"
          src={img}
          alt={title}
          width={800}
          height={800}
        />
      </div>
      <div className={`container ${styles.content__wrapper}`}>
        <div className={styles.content}>
          <h2>{title}</h2>
          <ReactMarkdown className={styles.content__text}>
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};
