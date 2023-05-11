import styles from "./layout.module.css";
import RootLayout from "@/app/layout";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
