import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper";
import { ServiceSlide } from "../components";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import styles from "../styles/pages/Servicios.module.css";

const slidePosition = "bot-left";

//positions
//top-right
//top-left
//bot-right
//bot-left

const servicios = () => {
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
          direction: "vertical"
        },
      }}
    >
      <SwiperSlide className={`${styles["bot-left"]}`}>
        <ServiceSlide />
      </SwiperSlide>
      <SwiperSlide className={`${styles["top-right"]}`}>
        <ServiceSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default servicios;
