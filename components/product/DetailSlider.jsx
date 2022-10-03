import Image from "next/image";
import { useState } from "react";
import { SideBySideMagnifier } from "react-image-magnifiers";

import styles from "./DetailSlider.module.css";

const images = [
  "bridgestone_ecopia.png",
  "bridgestone_ecopia_2.png",
  "bridgestone_ecopia_3.png",
  "bridgestone_ecopia_4.png",
  "bridgestone_ecopia.png",
];

export const DetailSlider = () => {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <>
      <div className="relative">
        <div className="flex">
          <SideBySideMagnifier
            imageSrc={`https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg`}
            imageAlt="test"
            largeImageSrc={`https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg`}
            zoomPosition="left"
            className="input-position"
            style={{ order: "0" }}
            zoomContainerBorder="1px solid #ccc"
            zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
          />
        </div>
        {/* <Image
          alt="test"
          width={500}
          height={500}
          src={`/images/${images[activeImg]}`}
        /> */}
        <div className={styles.pagination}>
          {images.map((img, idx) => (
            <div
              className={activeImg === idx ? styles["active"] : null}
              key={idx}
            ></div>
          ))}
        </div>
      </div>
      <div className="overflow-auto mt-8">
        <div className="relative w-full flex gap-8 snap-x snap-mandatory overflow-x-auto">
          {images.map((img, idx) => {
            return (
              <div
                className={`snap-start shrink-0 ${styles.thumb} ${
                  activeImg === idx && styles["active__thumb"]
                }`}
                key={idx}
              >
                <Image
                  onClick={() => setActiveImg(idx)}
                  layout="fixed"
                  alt="test"
                  width={150}
                  height={150}
                  src={`/images/${img}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </>
  );
};
