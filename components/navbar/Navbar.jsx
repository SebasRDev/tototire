import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/components/Navbar.module.css";
import { Cart } from "../";
import { useState } from "react";

export const Navbar = () => {
  const [openMenuMobile, setopenMenuMobile] = useState(false)

  return (
    <div className={`container ${styles.header}`}>
      <Link href="/" passHref>
        <a>
          <Image
            src="/tototire-logo.png"
            alt="tototire"
            width={140}
            height={65}
          />
        </a>
      </Link>
      <nav className={styles.desktopMenu}>
        <ul>
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
      </nav>
      <div style={{display:'flex', gap:'30px', alignItems:"center"}}>
        <Cart/>
        <div className={`${openMenuMobile && styles['active']} ${styles.mobileMenu}`}>
          <div className={styles.burguer} onClick={()=>setopenMenuMobile(!openMenuMobile)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul>
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
        </div>
      </div>
    </div>
  );
};
