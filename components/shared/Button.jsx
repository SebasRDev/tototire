import Link from "next/link";
import styles from "../../styles/components/Button.module.css";

export const Button = ({ href, label, classes }) => {
  return (
    <Link href={href} className={styles[classes]}>
      {label}
    </Link>
  );
};
