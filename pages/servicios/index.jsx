import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import { ServiceSlide } from "../../components";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import styles from "../../styles/pages/Servicios.module.css";
import { positionSlide } from "./../../components/constants";

const Servicios = ({ data }) => {
  const { Servicios } = data;

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      fadeEffect={{ crossFade: true }}
      modules={[EffectFade, Navigation]}
      className={`mySwiper-services ${styles.service__slider}`}
      breakpoints={{
        768: {
          direction: "vertical",
        },
      }}
    >
      {Servicios.map(({ id, Titulo, Descripcion, Posicion, Imagen }) => {
        const url = Imagen?.url ?? "/icons/default-wheel.svg";
        return (
          <SwiperSlide
            key={id}
            className={`${styles[positionSlide[Posicion]]}`}
          >
            <ServiceSlide title={Titulo} description={Descripcion} img={url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const getServerSideProps = async () => {
  const resp = await fetch(
    `${process.env.API_URL}/servicio?populate[Servicios][populate]=Imagen`
  );
  const { data } = await resp.json();

  return {
    props: { data },
  };
};

export default Servicios;
