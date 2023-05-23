import { Place } from "@/components/placeCard";
import PlaceCard from "@/components/placeCard";

type Filtered = {
  places: Array<any>;
  origin: { lat: number; lng: number };
};

export const showFilteredCards = ({ places, origin }: Filtered) => {
  return places.map((place: any, id: number) => {
    const placeLat: number = place.geometry.location.lat;
    const placeLng: number = place.geometry.location.lng;
    return (
      <li key={place.place_id}>
        <PlaceCard
          id={place.place_id}
          key={place.place_id}
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
};
