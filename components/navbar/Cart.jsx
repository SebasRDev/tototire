import Image from "next/image";

import styles from "../../styles/components/Cart.module.css";
import { Button, CartItem } from "../";
import { useCart } from "../../state/useCart";
import { numberToCurrency } from "../../helpers/helpers";

export const Cart = () => {
  const { open: openedCart, products, totalQuantity, totalPrice, setOpen } =
    useCart();

  return (
    <>
      <div
        className={styles.shopping__cart}
        onClick={() => setOpen(true)}
      >
        <Image
          src="/icons/cart.svg"
          alt="carrito de compras"
          width={30}
          height={30}
        />
        <span className={styles.badge}>{totalQuantity}</span>
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
            onClick={() => setOpen(false)}
          ></span>
          <h2>Tus Compras</h2>
          <div className={styles.cart__data}>
            {products.map((product) => (
              <CartItem {...product} key={product.slug} />
            ))}
          </div>
          <div className={styles.cart__prices}>
            <p id="countsLabel">Subtotal ({totalQuantity} Productos)</p>
            <h3 id="subtotalLabel">${numberToCurrency(totalPrice)}</h3>
            <Button
              href="/checkout"
              label="Comprar"
              classes="special__button"
            />
          </div>
        </div>
      </div>
    </>
  );
};
