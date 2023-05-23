import { useState } from "react";
import PlaceCard from "./placeCard";
import { Place } from "./placeCard";
import { showFilteredCards } from "@/helpers/misc";
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
  const cards = () => {
    if (filter === "food") {
      const foodPlaces = places.filter((place: any) =>
        place.types.includes("food")
      );
      return showFilteredCards({ places: foodPlaces, origin });
    }
    if (filter === "lodging") {
      const lodgingPlaces = places.filter(
        (place: Place) =>
          place.types.includes("lodging") ||
          place.types.includes("real_estate_agency")
      );
      return showFilteredCards({ places: lodgingPlaces, origin });
    } else if (filter === "all") {
      return showFilteredCards({ places, origin });
    }
  };

  return (
    <div>
      <ul>
        <li>
          <button className={styles.regularBtn}>Comida</button>
        </li>
        <li>
          <button className={styles.regularBtn}>Estadía</button>
        </li>
      </ul>
    </div>
  );
};
