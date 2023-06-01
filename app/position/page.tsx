"use client";
import React from "react";
import Layout from "@/components/layout";
import { getPosition } from "@/helpers/location";
import styles from "../page.module.css";
import Link from "next/link";
import Slider from "@/components/slider";

type Position = {
  coords: { lat: number; long: number };
  time: number;
};

console.log(navigator.userAgent.includes("like Gecko"));
export default function Position() {
  const [position, setPosition] = React.useState<Position | null>();
  const [radius, setRadius] = React.useState<number>(1000);

  React.useEffect(() => {
    getPosition(setPosition);
  }, []);

  // Checking for browser engine to define slider style

  return (
    <Layout>
      <section className={styles.main}>
        {position ? (
          <div className={styles.textContainer}>
            <span>Encontramos tu posición.</span>
            <Slider radius={radius} setRadius={setRadius} />
            {/* This link component should be improved by passing req arguments (&lat=12323&long=123213) etc */}
            <Link
              className={styles.textBtn}
              href={`/position/${position.coords.lat}~${position.coords.long}~${radius}`}
            >
              Mostrar establecimientos
              <span className={styles.emphasis}> abiertos </span>({radius}{" "}
              metros)
            </Link>
            <span className={styles.shownDisclaimer}>
              * Solo se mostrarán negocios registrados bajo Google business.
              Seguramente haya negocios cerca que no figuren aquí.
            </span>
          </div>
        ) : (
          <div>Posicionándote...</div>
        )}
      </section>
    </Layout>
  );
}
