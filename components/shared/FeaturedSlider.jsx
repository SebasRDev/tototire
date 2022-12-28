import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { FeaturedContent } from "../";

import styles from "../../styles/components/FeaturedSlider.module.css";

export const FeaturedSlider = ({ products }) => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    setSlides(products);
  }, [products]);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className={`mySwiper ${styles.featured__slider}`}
    >
      {slides.map(({ attributes: slide }) => (
        <SwiperSlide key={slide.slug}>
          <FeaturedContent {...slide} rotation={false} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
