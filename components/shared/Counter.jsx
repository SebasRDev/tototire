import React, { useContext, useEffect, useState } from "react";
import { shopingCartContext } from "../../state/context";
import styles from "../../styles/components/Counter.module.css";

export const Counter = ({ cant, maxValue, slug }) => {
  const [items, setItems] = useState(cant);
  const [action, setAction] = useState("");
  const [cartContext, setCartContext] = useContext(shopingCartContext);
  const { products } = cartContext;

  useEffect(() => {
    if (cant <= maxValue) {
      setItems(cant);
    }
  }, [cant, maxValue]);

  useEffect(() => {
    if(action === 'add' || action === 'substract'){
      const updatedProducts = products.map((el) =>
        el.slug === slug ? { ...el, selected: items } : el
      );
      console.log(updatedProducts);
      setCartContext({
        ...cartContext,
        products: updatedProducts
      })
    }
  }, [items, action, slug, products, setCartContext, cartContext]);

  const updateQuantity = (action) => {
    switch (action) {
      case "add":
        items < maxValue ? setItems(items + 1) : setItems(maxValue);
        setAction("add");
        break;
      case "substract":
        items > 1 ? setItems(items - 1) : setItems(1)
        setAction("substract");
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.counter}>
      <button
        onClick={() => updateQuantity("substract")}
        className={`${styles.button} ${items == 1 && styles["disabled"]}`}
      >
        -
      </button>
      <div className={styles.items}>{items}</div>
      <button
        onClick={() => updateQuantity("add")}
        className={`${styles.button} ${
          items == maxValue && styles["disabled"]
        }`}
      >
        +
      </button>
    </div>
  );
};
