"use client";
import { useState } from "react";
import { renderFilteredCards } from "@/helpers/misc";
import styles from "../app/page.module.css";
import Image from "next/image";
import foodIcon from "../app/food-dish.png";
import bedIcon from "../app/bed.png";
import clipboardIcon from "../app/clipboard.png";

type Origin = { lat: number; lng: number };

type Places = {
  places: Array<any>;
  origin: Origin;
};
type PlaceFilter = string;

export const PlacesContainer = ({ places, origin }: Places) => {
  const [filter, setFilter] = useState<PlaceFilter>("all");

  const cards: any = renderFilteredCards({
    places,
    origin,
    filterWord: filter,
  });

  return (
    <div className={styles.centerContainer}>
      <ul className={styles.btnList}>
        <li>
          <button
            onClick={() => {
              setFilter("food");
            }}
            className={styles.regularBtn}
          >
            <Image src={foodIcon} width={30} height={30} alt="food icon" />
            Comida
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setFilter("lodging");
            }}
            className={styles.regularBtn}
          >
            <Image src={bedIcon} width={30} height={30} alt="bed icon" />
            Estadía
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setFilter("all");
            }}
            className={styles.regularBtn}
          >
            <Image
              src={clipboardIcon}
              width={30}
              height={30}
              alt="all options icon"
            />
            Todos
          </button>
        </li>
      </ul>
      {cards.length < 1 ? (
        <span style={{ maxWidth: "220px" }}>
          No hay ninguno de esos locales abiertos.
        </span>
      ) : (
        <ul className={styles.cardsList}>{cards}</ul>
      )}
    </div>
  );
};
