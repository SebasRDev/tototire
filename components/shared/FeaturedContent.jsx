import Image from "next/image";

import styles from "../../styles/components/FeaturedSlider.module.css";
import { Button } from "../";

export const FeaturedContent = ({
  IMAGEN,
  DISENO,
  MARCA,
  ANCHO,
  PERFIL,
  RIN,
  PRECIO,
  rotation,
}) => {
  const img = IMAGEN.data
    ? IMAGEN.data[0].attributes.url
    : "/icons/default-wheel.svg";
  return (
    <>
      <div className={styles.special__name}>
        <h3>{MARCA}</h3>
        <h2>{`${DISENO} ${ANCHO}/${PERFIL}R${RIN}`}</h2>
      </div>
      <div
        className={`${styles.imageWrapper} ${rotation && styles["rotation"]}`}
      >
        <Image
          priority
          layout="responsive"
          src={img}
          alt={DISENO}
          width={555}
          height={555}
          sizes="(min-width: 390px) 200px,
                (min-width: 500px) 450px,
                555px"
        />
      </div>
      <div className={styles.price__actions}>
        <h3 className={styles.price}>${PRECIO}</h3>
        <Button
          href={`/`}
          label="añadir al carrito"
          classes="featured__button"
        />
      </div>
    </>
  );
};
