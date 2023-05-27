"use client";
import React from "react";
import Layout from "@/components/layout";
import { getPosition, watchPosition } from "@/helpers/location";
import styles from "../page.module.css";
import Link from "next/link";

type Position = {
  coords: { lat: number; long: number };
  time: number;
};

export default function Position() {
  const [position, setPosition] = React.useState<Position | null>();
  React.useEffect(() => {
    let positionTime: number = 0;
    // Not using this atm so I don't depend on having phone around
    // hardcoding coords while I develop
    // The REAL get position function -->
    // getPosition(setPosition);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        positionTime = position.timestamp;
      },
      () => {},
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );
    setPosition({
      coords: { lat: -34.9094716, long: -56.1531552 },
      time: positionTime,
    });
    console.log("getposition is being run ");
  }, []);

  const logPosition = () => {
    console.log(position);
  };

  console.log(position);
  return (
    <Layout>
      <section className={styles.main}>
        {position ? (
          <div className={styles.textContainer}>
            <span>Encontramos tu posición.</span>
            {/* This link component should be improved by passing req arguments (&lat=12323&long=123213) etc */}
            <Link
              className={styles.textBtn}
              href={`/position/${position.coords.lat}~${position.coords.long}~5000`}
            >
              Mostrar establecimientos cercanos{" "}
              <span className={styles.emphasis}>abiertos</span>
            </Link>
          </div>
        ) : (
          <div>Posicionándote...</div>
        )}
      </section>
    </Layout>
  );
}
