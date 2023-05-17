import { findPlaces } from "@/helpers/location";
import Layout from "@/components/layout";
import PlaceCard from "@/components/placeCard";

console.log("location pinged");
export default async function Places({ params }: any) {
  const paramsArr = params.nearby.split("~");

  const lat = Number(paramsArr[0]);
  const long = Number(paramsArr[1]);
  const radius = Number(paramsArr[2]);

  const places = await findPlaces(lat, long, radius);

  const openPlaces = places.results.filter((place: any) => {
    // if (places.results.indexOf(place) < 1) {
    //   return false;
    // }
    if (!place.opening_hours) {
      return false;
    }
    return place.opening_hours.open_now;
  });
  console.log(openPlaces);
  const placeCards = openPlaces.map((place: any, id: number) => {
    const placeLat: number = place.geometry.location.lat;
    const placeLng: number = place.geometry.location.lng;
    return (
      <li>
        <PlaceCard
          id={place.id}
          key={id}
          types={place.types}
          name={place.name}
          lat={placeLat}
          lng={placeLng}
          open={place.opening_hours.open_now}
        />
      </li>
    );
  });

  const locationName: string = places.results[0].name;

  return (
    <Layout>
      <div>
        <h2>You are in {locationName}</h2>
        <ul>{placeCards}</ul>
      </div>
    </Layout>
  );
}
