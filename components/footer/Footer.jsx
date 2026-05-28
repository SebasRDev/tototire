import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={`container ${styles.footer}`}>
      <Image alt="Tototire" src="/tototire-logo.png" width={384} height={129} layout="fixed"/>

      <ul className={styles.footer__menu}>
        <li>
          <Link href="/">INICIO</Link>
        </li>
        <li>
          <Link href="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link href="/nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link href="/servicios">SERVICIOS</Link>
        </li>
      </ul>

      <div className={styles.contact}>
        <div className={styles.contact__card}>
          <Image
            alt="Telefono"
            src="/icons/telephone.png"
            width={32}
            height={32}
            layout="fixed"
          />
          <div className={styles.contact__data}>
            <a href="tel:3102875490">TOTOTIRE SERVICE: 3102875490</a>
            <a href="tel:3148215619">TOTOTIRE SERVICE: 3148215619</a>
            <a href="tel:3148215619">serviteca@tototire.com</a>
            <a href="tel:3138828319">VITRINA CONTINENTAL: 3138828319</a>
            <a href="tel:6015167445">VITRINA CONTINENTAL:6015167445</a>
            <a href="tel:3138523507">info@tototire.com</a>
            <a href="tel:3138523507">BODEGA: 3138523507</a>
            <a href="tel:6015167445">BODEGA:6015744846</a>
            <a href="tel:3138523507">ventas@tototire.com</a>
          </div>
        </div>
        <div className={styles.contact__card}>
          <Image
            alt="Telefono"
            src="/icons/telephone.png"
            width={32}
            height={32}
            layout="fixed"
          />
          <div className={styles.contact__data}>
            <a href="#">TOTOTIRE SERVICE: <span>Carrera 24 No 7 - 40</span></a>
            <a href="#">VITRINA CONTINENTAL: <span>calle 8 No 23 - 07</span></a>
            <a href="#">BODEGA: <span>Carrera 23 No 7 - 37</span></a>
            <p>Bogotá, Colombia</p>
          </div>
        </div>
      </div>
    </div>
  );
};
