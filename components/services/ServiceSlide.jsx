import Image from "next/image";

import styles from "../../styles/pages/Servicios.module.css";

export const ServiceSlide = () => {
  return (
    <>
      <div className={styles.bg__img}>
        <Image
          className={styles.image__slider__desk}
          layout="responsive"
          src="/service_1.png"
          alt="service"
          width={800}
          height={800}
        />
      </div>
      <div className={`container ${styles.content__wrapper}`}>
        <div className={styles.content}>
          <h2>
            Instalacion de llantas <br /> 2
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sint
            porro numquam debitis sapiente id exercitationem et error mollitia,
            quis adipisci vel sed tempora hic eum fugiat delectus, illum enim!
          </p>
        </div>
      </div>
    </>
  );
};
