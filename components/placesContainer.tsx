"use client";
import { ReactNode, useState } from "react";
import PlaceCard from "./placeCard";
import { Place } from "./placeCard";
import { renderFilteredCards } from "@/helpers/misc";
import styles from "../app/page.module.css";

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
