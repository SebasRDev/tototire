import Link from "next/link";
import styles from "../../styles/components/Button.module.css";

export const Button = ({ href, label, classes }) => {
  return (
    <Link href={href} passHref>
      <a className={styles[classes]}>{label}</a>
    </Link>
  );
};
