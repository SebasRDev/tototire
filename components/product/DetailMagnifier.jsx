import Image from "next/image";
import { useState } from "react";

import styles from "./DetailMagnifier.module.css";

export const DetailMagnifier = ({
  src,
  alt,
  width,
  height,
  magWidth,
  magHeight,
  zoomLvl,
}) => {
  const [showMag, setShowMag] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([width, height]);

  return (
    <div className={styles.magnifierContainer}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMag(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageXOffset;

          setXY([x, y]);
        }}
        onMouseLeave={(e) => {
          setShowMag(false);
        }}
      />
      {console.log(imgWidth * zoomLvl)}

      {/* {magnifier} */}
      <div
        className={styles.magnifier}
        style={{
          height: `${magHeight}px`,
          width: `${magHeight}px`,
          top: `${y - magHeight / 2}px`,
          left: `${x - magWidth / 2}px`,
          backgroundImage: `url(${src})`,
          backgroundSize: `${imgWidth * zoomLvl}px ${imgHeight * zoomLvl}px`,
          backgroundPositionX: `${-x * zoomLvl + magWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLvl + magHeight / 2}px`,
        }}
      ></div>
      {/* {showMag && (
        <div
          className={styles.magnifier}
          style={{
            height: `${magHeight}px`,
            width: `${magHeight}px`,
            top: `${y}px`,
            left: `${x}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: `${imgWidth * zoomLvl}px ${imgHeight * zoomLvl}px`,
            backgroundPositionX: `${-x * zoomLvl + magWidth / 2}px`,
            backgroundPositionY: `${-x * zoomLvl + magHeight / 2}px`,
          }}
        ></div>
      )} */}
    </div>
  );
};
