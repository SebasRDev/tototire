import { useState } from "react";
import { MainLayout } from "../components";
import { shopingCartContext } from "../state/context";
import "../styles/globals.css";

// cart = {
//   quantity: 0,
//   products: [
  // {
  //   id: 239,
  //   attributes: {
  //     MARCA: 'BRIDGESTONE',
  //     DISENO: 'ECOPIA EP500',
  //     RIN: 20,
  //     ANCHO: 175,
  //     PERFIL: 55,
  //     CANT: 8,
  //     COD_REF: 'BR1755520',
  //     PRECIO: '709.385',
  //     slug: 'br-1755520',
  //     IMAGEN: { data: null }
  //   }
  // }
//],
// }

function MyApp({ Component, pageProps }) {
  const [cartContext, setcCartContext] = useState({
    quantity: 0,
    products: [],
  })

  return (
    <shopingCartContext.Provider
      value={[cartContext, setcCartContext]}
    >
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </shopingCartContext.Provider>
  );
}

export default MyApp;
