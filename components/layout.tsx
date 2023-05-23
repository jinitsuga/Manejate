import Navbar from "./navbar";
import { ReactNode } from "react";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={styles.layMain}>{children}</main>
    </>
  );
}
