import { useState } from "react";
import PlaceCard from "./placeCard";
import { Place } from "./placeCard";

type Origin = { lat: number; lng: number };

type Places = {
  places: Array<Place>;
  origin: Origin;
};
type PlaceFilter = string;

export const PlacesContainer = ({ places, origin }: Places) => {
  const [filter, setFilter] = useState<PlaceFilter>("all");

  //   const foodPlaces = places.filter((place) => place.types.includes("food"));
  const lodgingPlaces = places.filter(
    (place: Place) =>
      place.types.includes("lodging") ||
      place.types.includes("real_estate_agency")
  );
  const cards = () => {
    if (filter === "food") {
      const foodPlaces = places.filter((place: Place) =>
        place.types.includes("food")
      );
      return foodPlaces.map((place: any, id: number) => {
        const placeLat: number = place.geometry.location.lat;
        const placeLng: number = place.geometry.location.lng;
        return (
          <li>
            <PlaceCard
              id={place.place_id}
              key={id}
              types={place.types}
              name={place.name}
              origin={origin}
              lat={placeLat}
              lng={placeLng}
              open={place.opening_hours.open_now}
            />
          </li>
        );
      });
    }
  };

  return <section></section>;
};
