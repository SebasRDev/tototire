import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/ProductCard.module.css";
import { useCart } from "../../state/useCart";

export const ProductCard = ({
  img,
  mark,
  reference,
  price,
  priceOffer,
  slug,
  view = "grid",
  product,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (product) addToCart(product);
  };

  if (view === "list") {
    return (
      <div className={styles.product__list__item}>
        <div className={styles.list__image}>
          <Image alt={reference} src={img} width={90} height={90} />
        </div>
        <div className={styles.list__body}>
          <p className={styles.list__ref}>{reference}</p>
          <p className={styles.list__mark}>{mark}</p>
        </div>
        <div className={styles.list__right}>
          <p className={styles.list__price}>${price}</p>
          <div className={styles.list__actions}>
            <Link className={styles.list__details} href={`/productos/${slug}`}>
              Ver detalles
            </Link>
            <button className={styles.list__add} onClick={handleAddToCart}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    );
  }

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
      <div className={styles.card__actions}>
        <Link className={styles.details} href={`/productos/${slug}`}>
          Ver detalles
        </Link>
        <button className={styles.add__to__cart} onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
