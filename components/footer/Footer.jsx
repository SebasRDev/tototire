import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={`container ${styles.footer}`}>
      <Image alt="Tototire" src="/tototire-logo.png" width={180} height={90} />

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
        <div>
          <Image
            src={}
          />
        </div>
      </div>
    </div>
  );
};
