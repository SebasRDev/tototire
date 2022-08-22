import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { FeaturedContent } from "../";

import styles from '../../styles/components/FeaturedSlider.module.css'

export const FeaturedSlider = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    setSlides([
      {
        id: "1",
        img: "/icons/default-wheel.svg",
        mark: 'PIRELLI',
        reference: 'CINTURATO P7 RFT',
        width: '205',
        profile: '55',
        rim: '17',
        price:'963,374',
        slug: 'PR2055517'
      },
      {
        id: "2",
        img: "/icons/default-wheel.svg",
        mark: 'BRIDGESTONE',
        reference: 'POTENZA S001',
        width: '225',
        profile: '40',
        rim: '18',
        price:'681,169',
        slug: 'BR2254018S'
      },
      {
        id: "3",
        img: "/icons/default-wheel.svg",
        mark: 'PIRELLI',
        reference: 'CINTURATO P7 RFT',
        width: '225',
        profile: '45',
        rim: '18',
        price:'1,244,528',
        slug: 'PR2254518'
      },
    ]);
  }, []);

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
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <FeaturedContent {...slide} rotation={false} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
