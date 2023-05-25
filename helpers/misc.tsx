import { Place } from "@/components/placeCard";
import PlaceCard from "@/components/placeCard";

type Filtered = {
  places: Array<any>;
  origin: { lat: number; lng: number };
  filterWord: string;
};

const renderCards = (placesArr: Array<Place>, origin: any) =>
  placesArr.map((place: any, id: number) => {
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

export const renderFilteredCards = ({
  places,
  origin,
  filterWord,
}: Filtered) => {
  switch (filterWord) {
    case "food":
      const foodPlaces = places.filter((place: Place) =>
        place.types.includes("food")
      );
      return renderCards(foodPlaces, origin);

    case "lodging":
      const lodgingPlaces = places.filter(
        (place: Place) =>
          place.types.includes("lodging") ||
          place.types.includes("real_estate_agency")
      );
      return renderCards(lodgingPlaces, origin);

    case "all":
      return renderCards(places, origin);
  }
};
