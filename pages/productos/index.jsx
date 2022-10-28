import { ProductCard } from "../../components";

import styles from "../../styles/pages/Products.module.css";

const productos = ({ data }) => {
  return (
    <div className={`container ${styles.products__page}`}>
      <div className={styles.products__wrapper}>
        {data.map(({ attributes:product }) => {
          const { COD_REF, MARCA, PRECIO, DISENO, ANCHO, PERFIL, RIN, IMAGEN } =
          product;
          const mainImg = IMAGEN.data
            ? IMAGEN.data[0].attributes.url
            : "/icons/default-wheel.svg";

          const dataProduct = {
            img: mainImg,
            reference: `${DISENO} ${ANCHO}/${PERFIL}R${RIN}`,
            mark: MARCA,
            price: PRECIO,
            id: COD_REF
          };

          return <ProductCard key={COD_REF} {...dataProduct} />;
        })}
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const resp = await fetch(`${process.env.API_URL}/productos?populate=IMAGEN`);
  const { data } = await resp.json();

  return {
    props: {
      data,
    },
  };
};

export default productos;
