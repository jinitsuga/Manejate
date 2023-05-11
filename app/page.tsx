import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <p>
          Instantly deploy your Next.js site to a shareable URL with Vercel.
        </p>
      </main>
    </Layout>
  );
}
