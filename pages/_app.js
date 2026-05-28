import Script from "next/script";
import { useEffect, useState } from "react";
import { MainLayout } from "../components";
import { shopingCartContext } from "../state/context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cartContext, setcCartContext] = useState({
    open: false,
    quantity: 0,
    products: [],
  })

  // useEffect(() => {
  //   OpenPay.setId('test');
  //   OpenPay.setApiKey('9as87faeta98s');
  // }, [])


  return (
    <shopingCartContext.Provider
      value={[cartContext, setcCartContext]}
    >
      <Script src="https://resources.openpay.co/openpay.v1.min.js" />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </shopingCartContext.Provider>
  );
}

export default MyApp;
