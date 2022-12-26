import React from "react";
import { AboutUsItem } from "../../components/index";

import styles from "../../styles/pages/Nosotros.module.css";

const nosotros = ({ data }) => {
  console.log(data);
  const { TituloPagina, Nosotros } = data.attributes;
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{TituloPagina}</h2>
        <div className={styles.flex__wrapper}>
          {Nosotros.map((el) => {
            const img = el.Imagen.data.attributes.url;
            const size = el.Orientacion === "Horizontal" ? "large" : "small";
            return (
              <AboutUsItem
                key={el.id}
                img={img}
                title={el.Titulo}
                description={el.Descripcion}
                size={size}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const resp = await fetch(`${process.env.API_URL}/nosotro?populate=deep,3`);
  const { data } = await resp.json(); // your fetch function here

  return {
    props: {
      data,
    },
  };
};

export default nosotros;
