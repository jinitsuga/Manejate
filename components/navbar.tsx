import styles from "./layout.module.css";
import Link from "next/link";
import RootLayout from "@/app/layout";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>About</li>
      </ul>
    </nav>
  );
}
