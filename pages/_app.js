import { useEffect, useState } from "react";
import { MainLayout } from "../components";
import { shopingCartContext } from "../state/context";
import "../styles/globals.css";

const CART_STORAGE_KEY = "tototire_cart_products";

function MyApp({ Component, pageProps }) {
  const [cartContext, setcCartContext] = useState({
    open: false,
    products: [],
  });

  useEffect(() => {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return;

    try {
      const products = JSON.parse(stored);
      if (Array.isArray(products) && products.length > 0) {
        setcCartContext((prev) => ({ ...prev, products }));
      }
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartContext.products)
    );
  }, [cartContext.products]);

  return (
    <shopingCartContext.Provider value={[cartContext, setcCartContext]}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </shopingCartContext.Provider>
  );
}

export default MyApp;
