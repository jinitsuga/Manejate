import styles from "./page.module.css";
import Layout from "@/components/layout";
import React from "react";
import Link from "next/link";

// console.log(process.env.MAPS_KEY);

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.headingBig}>Bienvenid@!</h2>
        <h4 className={styles.heading}>
          Encuentra{" "}
          <strong className={styles.emphasis}> locales abiertos </strong> cerca
          tuyo.{" "}
        </h4>
        <p className={styles.mainText}>
          <strong>Aviso: </strong>Esta app necesita acceder a tu ubicación para
          poder brindarte información sobre los locales abiertos en tu cercanía.
          Puedes optar por no revelar tu ubicación, pero de no hacerlo, la app
          no funcionará correctamente.
        </p>
        <Link className={styles.mainBtn} href="/position">
          Comenzar
        </Link>
      </main>
    </Layout>
  );
}
