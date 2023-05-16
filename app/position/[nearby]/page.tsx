import { findPlaces } from "@/helpers/location";

console.log("location pinged");
export default async function Places({ params }: any) {
  const lat = Number(params.nearby.split("~")[0]);
  const long = Number(params.nearby.split("~")[1]);
  const radius = Number(params.nearby.split("~")[2]);

  const places = await findPlaces(lat, long, radius);

  const openPlaces = places.results.filter((place: any) => {
    if (places.results.indexOf(place) < 1) {
      return false;
    }
    if (!place.opening_hours) {
      return false;
    }
    return place.opening_hours.open_now;
  });
  console.log(openPlaces);

  const locationName: string = places.results[0].name;

  const randomPlace = places.results[3];

  const place = {
    name: randomPlace.name,
    isOpen: randomPlace.opening_hours.open_now,
    type: randomPlace.types,
  };
  console.log(place);
  return (
    <div>
      <h2>You are in {locationName}</h2>
    </div>
  );
}
