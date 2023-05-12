"use client";
import React from "react";
import Layout from "@/components/layout";
import { getPosition } from "@/helpers/location";
import styles from "../page.module.css";

type Position = {
  lat: string;
  long: string;
};

export default function Position() {
  const [position, setPosition] = React.useState<Position | null>();

  React.useEffect(() => {
    // When Component is mounting, user's location is set

    getPosition();
  }, []);

  return (
    <Layout>
      <section className={styles.main}>
        <div>POSITION</div>
      </section>
    </Layout>
  );
}
