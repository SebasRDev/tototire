import React from "react";
import { AboutUsItem } from "../../components/index";

import styles from "../../styles/pages/Nosotros.module.css";

const data = [
  {
    img: "/service_1.png",
    title: "TU ALIADO",
    description:
      "TOTO TIRE es una empresa abocada a la comercialización, distribución y venta de llantas, rines nacionales e importados, con más de 20 años de trayectoria en el mercado, dotando a la industria automotriz, en vehículos pesados, camionetas y automóviles en Colombia. Comprometida con las políticas de calidad y seguridad vigentes, el cual garantiza el compromiso de esta para sus clientes.",
    size: "large",
  },
  {
    img: "/service_1.png",
    title: "TU ALIADO 2",
    description:
      "TOTO TIRE es una empresa abocada a la comercialización, distribución y venta de llantas, rines nacionales e importados, con más de 20 años de trayectoria en el mercado, dotando a la industria automotriz, en vehículos pesados, camionetas y automóviles en Colombia. Comprometida con las políticas de calidad y seguridad vigentes, el cual garantiza el compromiso de esta para sus clientes.",
    size: "large",
  },
  {
    img: "/icons/cart.svg",
    title: "CALIDAD",
    description:
      "Como consecuencia de nuestros principios, TOTO TIRE está comprometida a asegurar el cumplimiento de lo acordado brindando un servicio y soluciones de calidad y comprometer a toda empresa, proveedores y socios comerciales con elevados estándares de calidad en los servicios y productos.",
    size: "small",
  },
  {
    img: "/icons/cart.svg",
    title: "CALIDAD",
    description:
      "Como consecuencia de nuestros principios, TOTO TIRE está comprometida a asegurar el cumplimiento de lo acordado brindando un servicio y soluciones de calidad y comprometer a toda empresa, proveedores y socios comerciales con elevados estándares de calidad en los servicios y productos.",
    size: "small",
  },
  {
    img: "/icons/cart.svg",
    title: "CALIDAD",
    description:
      "Como consecuencia de nuestros principios, TOTO TIRE está comprometida a asegurar el cumplimiento de lo acordado brindando un servicio y soluciones de calidad y comprometer a toda empresa, proveedores y socios comerciales con elevados estándares de calidad en los servicios y productos.",
    size: "small",
  },
];

const nosotros = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>PRESENTAMOS TOTOTIRE</h2>
        <div className={styles.flex__wrapper}>
          {data.map((el, idx) => (
            <AboutUsItem
              key={idx}
              img={el.img}
              title={el.title}
              description={el.description}
              size={el.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default nosotros;
