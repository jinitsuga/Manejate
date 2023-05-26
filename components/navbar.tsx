import styles from "./layout.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link className={styles.navBtn} href="/">
            home
          </Link>
        </li>
        <li>
          <Link className={styles.navBtn} href="/about">
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
}
