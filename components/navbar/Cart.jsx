import Image from "next/image";
import { useContext, useState } from "react";

import styles from "../../styles/components/Cart.module.css";
import { Button } from "../";
import { shopingCartContext } from "../../state/context";

export const Cart = () => {
  const [openedCart, setOpenedCart] = useState(false);
  const [cartContext, setCartContext] = useContext(shopingCartContext);
  
  const handleOpenCart = () => {
    setOpenedCart(!openedCart);
  };

  return (
    <>
      <div className={styles.shopping__cart} onClick={handleOpenCart}>
        <Image
          src="/icons/cart.svg"
          alt="carrito de compras"
          width={30}
          height={30}
        />
        <span className={styles.badge}>{cartContext.quantity}</span>
      </div>
      <div
        className={`${openedCart ? `${styles["active"]} 'fadeIn'` : null} ${
          styles.cart__popUp
        }`}
      >
        <div className={styles.cart__popUp__bg}></div>
        <div className={styles.cart__popUp__content}>
          <span className={styles.cart__close} onClick={handleOpenCart}></span>
          <h2>Tus Compras</h2>
          <div className={styles.cart__data}></div>
          <div className={styles.cart__prices}>
            <p id="countsLabel">Subtotal (0 Productos)</p>
            <h3 id="subtotalLabel">$0</h3>
            <Button
              href="/finalizar-compra"
              label="Comprar"
              classes="special__button"
            />
            {/* <a
              href="https://tototire.com/preprod/finalizar-compra/"
              className="special__button"
            >
              Comprar
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};
