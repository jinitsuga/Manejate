"use client";
import styles from "./slider.module.css";

type SliderType = {
  radius: number;
  setRadius: React.Dispatch<React.SetStateAction<number>>;
};

export default function Slider({ setRadius, radius }: SliderType) {
  return (
    <>
      <h3 className={styles.sliderTitle}>Rango de búsqueda:</h3>
      <span className={styles.radiusNumber}>{radius} mts</span>
      <input
        className={styles.slider}
        type="range"
        value={radius}
        min={500}
        max={5000}
        step={500}
        aria-orientation="horizontal"
        onChange={(e) => setRadius(Number(e.target.value))}
      ></input>
    </>
  );
}
