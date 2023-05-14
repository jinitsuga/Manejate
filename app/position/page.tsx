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
    getPosition(setPosition);
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
        {/* {position && (
          <div>
            <span>Lat: {position?.coords.lat}</span>
            <span>Long: {position?.coords.long}</span>
          </div>
        )} */}
      </section>
    </Layout>
  );
}
