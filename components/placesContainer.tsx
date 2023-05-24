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

  // Filtering set of cards depending on filter selected by user.
  // REFACTORING THIS INTO 'RENDERFILTERCARDS' FUNCTION TO AVOID REPETITION AND HAVE LOGIC IN 1 PLACE
  const makeCards = () => {
    console.log("making cards");

    if (filter === "food") {
      const foodPlaces = places.filter((place: any) =>
        place.types.includes("food")
      );
      return renderFilteredCards({ places: foodPlaces, origin });
    }
    if (filter === "lodging") {
      const lodgingPlaces = places.filter(
        (place: Place) =>
          place.types.includes("lodging") ||
          place.types.includes("real_estate_agency")
      );
      return renderFilteredCards({ places: lodgingPlaces, origin });
    } else if (filter === "all") {
      return renderFilteredCards({ places, origin });
    }
  };

  const cards: any = makeCards();
  console.log(cards?.length);
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
