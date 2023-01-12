import Image from "next/image";
import React from "react";
import { Counter } from "../";
import { shopingCartContext } from "../../state/context";
import styles from "../../styles/components/CartItem.module.css";

export const CartItem = (props) => {
  const { slug, DISENO, IMAGEN, MARCA, ANCHO, RIN, PERFIL, CANT, PRECIO, selected } =
    props;
  const imgUrl = IMAGEN.data
    ? IMAGEN.data[0].attributes.url
    : "/icons/default-wheel.svg";

  return (
    <div className={styles.cart__item}>
      <Image
        src={imgUrl}
        alt={DISENO}
        width={200}
        height={200}
        layout="fixed"
      />
      <div className={styles.tire__data}>
        <div>
          <h4 className={styles.brand}>{MARCA}</h4>
          <h3 className={styles.design}>
            {DISENO} {ANCHO}/{PERFIL}R{RIN}
          </h3>
          <h3 className={styles.price}>COP {PRECIO}</h3>
        </div>
        <div className={styles.actions}>
          <Counter cant={selected} maxValue={CANT} slug={slug}/>
          <button className={styles.delete}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};
