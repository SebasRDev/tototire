import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import { ServiceSlide } from "../../components";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import styles from "./Servicios.module.css";
import { positionSlide } from "./constants";

const servicios = ({ data }) => {
  const { Servicios } = data.attributes;

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      fadeEffect={{
        crossFade: true,
      }}
      modules={[EffectFade, Navigation]}
      className={`mySwiper-services ${styles.service__slider}`}
      breakpoints={{
        768: {
          direction: "vertical",
        },
      }}
    >
      {Servicios.map(({ id, Titulo, Descripcion, Posicion, Imagen }) => {
        const { url } = Imagen.data.attributes;
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

export const getServerSideProps = async (ctx) => {
  const resp = await fetch(`${process.env.API_URL}/servicio?populate=deep,3`);
  const { data } = await resp.json();

  return {
    props: {
      data,
    },
  };
};

export default servicios;
