"use client";
import React from "react";
import Layout from "@/components/layout";
import { getPosition, watchPosition } from "@/helpers/location";
import styles from "../page.module.css";
import Link from "next/link";
import Slider from "@/components/slider";

type Position = {
  coords: { lat: number; long: number };
  time: number;
};

export default function Position() {
  const [position, setPosition] = React.useState<Position | null>();
  const [radius, setRadius] = React.useState<number>(1000);

  React.useEffect(() => {
    // let positionTime: number = 0;
    // Not using this atm so I don't depend on having phone around
    // hardcoding coords while I develop
    // The REAL get position function -->
    getPosition(setPosition);
    //------------------

    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     positionTime = position.timestamp;
    //   },
    //   () => {},
    //   { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    // );
    // setPosition({
    //   coords: { lat: 41.397442, long: 2.162015 },
    //   time: positionTime,
    // });
    // console.log("getposition is being run ");
  }, []);

  // console.log(position);
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
              href={`/position/${position.coords.lat}~${position.coords.long}~1000`}
            >
              Mostrar establecimientos
              <span className={styles.emphasis}> abiertos </span>({radius}{" "}
              metros)
            </Link>
            <span className={styles.shownDisclaimer}>
              * Solo se mostrarán negocios registrados bajo "Google business".
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
