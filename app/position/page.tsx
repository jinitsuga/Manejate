"use client";
import React from "react";
import Layout from "@/components/layout";
import { getPosition } from "@/helpers/location";
import styles from "../page.module.css";

type Position = {
  coords: { lat: string; long: string };

  time: number;
};

export default function Position() {
  const [position, setPosition] = React.useState<Position | null>();
  console.log(position);
  React.useEffect(() => {
    // When C   omponent is mounting, user's location is set

    getPosition(setPosition);
  }, []);

  return (
    <Layout>
      <section className={styles.main}>
        <div>POSITION</div>
        <span>
          Your position is {position?.coords.lat} X {position?.coords.long}
        </span>
      </section>
    </Layout>
  );
}
