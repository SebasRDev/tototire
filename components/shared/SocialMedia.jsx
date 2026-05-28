import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/SocialMedia.module.css";

export const SocialMedia = () => {
  return (
    <div className={styles.social__wrapper}>
      <Link href="https://api.whatsapp.com/send?phone=573106964065" prefetch>
        <div className={`${styles.media__wrapper} ${styles.whatsapp}`}>
          <Image
            src="/icons/whatsapp.svg"
            alt="whatsapp"
            width={25}
            height={25}
          />
        </div>
      </Link>
      <Link href="https://www.instagram.com/tototire/" prefetch>
        <div className={`${styles.media__wrapper} ${styles.instagram}`}>
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={25}
            height={25}
          />
        </div>
      </Link>
      <Link href="https://www.facebook.com/people/TOTO-TIRE/100042132952304/" prefetch>
        <div className={`${styles.media__wrapper} ${styles.facebook}`}>
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={25}
            height={25}
          />
        </div>
      </Link>
    </div>
  );
};
