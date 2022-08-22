import Image from "next/image";

import styles from "../../styles/components/FeaturedSlider.module.css";
import { Button } from "../";

export const FeaturedContent = ({
  img,
  reference,
  mark,
  width,
  profile,
  rim,
  price,
  rotation
}) => {
  return (
    <>
      <div className={styles.special__name}>
        <h3>{mark}</h3>
        <h2>{`${reference} ${width}/${profile}R${rim}`}</h2>
      </div>
      <div className={`${styles.imageWrapper} ${rotation && styles['rotation']}`}>
        <Image
          priority
          layout="responsive"
          src={img}
          alt={reference}
          width={555}
          height={555}
          sizes="(min-width: 390px) 200px,
                (min-width: 500px) 450px,
                555px"
        />
      </div>
      <div className={styles.price__actions}>
        <h3 className={styles.price}>${price}</h3>
        <Button href={`/`} label="añadir al carrito" classes='featured__button'/>
      </div>
    </>
  );
};
