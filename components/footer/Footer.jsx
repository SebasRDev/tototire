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
            <a href="tel:3138523507">3138523507</a>
            <a href="tel:3105640490">3105640490</a>
            <a href="tel:6013711483">6013711483</a>
            <a href="tel:6012779405">6012779405</a>
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
            <a href="#">calle 8 No 23 - 07</a>
            <a href="#">Carrera 23 No 7 - 37</a>
            <p>Bogotá, Colombia</p>
          </div>
        </div>
      </div>
    </div>
  );
};
