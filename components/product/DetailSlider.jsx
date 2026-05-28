import Image from "next/image";
import { useState } from "react";
import { DetailMagnifier } from "../";

import styles from "./DetailSlider.module.css";

export const DetailSlider = ({ images }) => {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <>
      <div className="relative">
        <div className="flex">
          <DetailMagnifier
            alt="producto"
            src={images[activeImg]}
            width={500}
            height={500}
            magHeight={150}
            magWidth={150}
            zoomLvl={1.5}
          />
        </div>
        <div className={styles.pagination}>
          {images.map((img, idx) => (
            <div
              onClick={() => setActiveImg(idx)}
              className={activeImg === idx ? styles["active"] : null}
              key={idx}
            ></div>
          ))}
        </div>
      </div>
      <div className="overflow-auto mt-8">
        <div className="relative w-full flex gap-8 snap-x snap-mandatory overflow-x-auto">
          {images.map((img, idx) => (
            <div
              className={`snap-start shrink-0 ${styles.thumb} ${
                activeImg === idx ? styles["active__thumb"] : null
              }`}
              key={idx}
            >
              <Image
                onClick={() => setActiveImg(idx)}
                alt="miniatura"
                width={150}
                height={150}
                src={img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
