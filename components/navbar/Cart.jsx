import Image from "next/image";
import { useContext, useState } from "react";

import styles from "../../styles/components/Cart.module.css";
import { Button, CartItem } from "../";
import { shopingCartContext } from "../../state/context";
import { formatPrice, numberToCurrency } from "../../helpers/helpers";

export const Cart = () => {
  const [cartContext, setCartContext] = useContext(shopingCartContext);
  const { open: openedCart } = cartContext;

  const { quantity: totalProducts, products } = cartContext;

  const handleOpenCloseCart = (isOpen) => {
    setCartContext({
      ...cartContext,
      open: isOpen,
    });
  };

  const handleGetTotal = () => {
    const total = products
      .map(({ selected, PRECIO }) => selected * formatPrice(PRECIO))
      .reduce((acc, curr) => acc + curr, 0);
    return numberToCurrency(total);
  };

  return (
    <>
      <div
        className={styles.shopping__cart}
        onClick={() => handleOpenCloseCart(true)}
      >
        <Image
          src="/icons/cart.svg"
          alt="carrito de compras"
          width={30}
          height={30}
        />
        <span className={styles.badge}>{totalProducts}</span>
      </div>
      <div
        className={`${openedCart ? `${styles["active"]} 'fadeIn'` : null} ${
          styles.cart__popUp
        }`}
      >
        <div className={styles.cart__popUp__bg}></div>
        <div className={styles.cart__popUp__content}>
          <span
            className={styles.cart__close}
            onClick={() => handleOpenCloseCart(false)}
          ></span>
          <h2>Tus Compras</h2>
          <div className={styles.cart__data}>
            {products.map((product) => (
              <CartItem {...product} key={product.slug} />
            ))}
          </div>
          <div className={styles.cart__prices}>
            <p id="countsLabel">Subtotal ({totalProducts} Productos)</p>
            <h3 id="subtotalLabel">${handleGetTotal()}</h3>
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
