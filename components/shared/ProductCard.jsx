import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/components/ProductCard.module.css";

export const ProductCard = ({
  img,
  mark,
  reference,
  price,
  priceOffer,
  slug,
}) => {
  return (
    <div className={styles.product__card}>
      <Image alt={reference} src={img} width={270} height={270} />
      <h3 className={styles.tire__ref}>{reference}</h3>
      <p className={styles.tire__mark}>{mark}</p>
      <div className={styles.prices}>
        <p
          className={`${styles.current__price} ${
            priceOffer && styles.offer__price__old
          }`}
        >
          ${price}
        </p>
        {priceOffer && (
          <p className={`${styles.offer__price} ${styles.current__price}`}>
            ${priceOffer}
          </p>
        )}
      </div>
      <Link passHref href={`/productos/${slug}`}>
        <a className={styles.details}>Ver detalles</a>
      </Link>
    </div>
  );
};