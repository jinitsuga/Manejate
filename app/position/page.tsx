"use client";
import React from "react";
import Layout from "@/components/layout";
import { getPosition, watchPosition } from "@/helpers/location";
import styles from "../page.module.css";

type Position = {
  coords: { lat: number; long: number };
  time: number;
};

export default function Position() {
  const [position, setPosition] = React.useState<Position | null>();
  React.useEffect(() => {
    let positionTime: number = 0;
    // Not using this atm so I don't depend on having phone around to develop:
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
      coords: { lat: -34.6657801, long: -54.1536834 },
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
          <div>
            <div>POSITION</div>
            <span>
              Your position is {position?.coords.lat} X {position?.coords.long}
            </span>
            <button
              onClick={() => {
                logPosition();
              }}
            >
              Log position
            </button>
          </div>
        ) : (
          <div>Posicionándote...</div>
        )}
      </section>
    </Layout>
  );
}
