import { useState } from "react";
import PlaceCard from "./placeCard";
import { Place } from "./placeCard";

type Places = {
  places: Array<Place>;
};
type PlaceFilter = string;

export const PlacesContainer = ({ places }: Places) => {
  const [filter, setFilter] = useState<PlaceFilter>("");

  const foodPlaces = places.filter((place) => place.types.includes("food"));
  const lodgingPlaces = places.filter(
    (place) =>
      place.types.includes("lodging") ||
      place.types.includes("real_estate_agency")
  );

  return <section></section>;
};
