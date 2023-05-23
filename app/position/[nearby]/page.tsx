import { findPlaces } from "@/helpers/location";
import Layout from "@/components/layout";
import { PlacesContainer } from "@/components/placesContainer";

console.log("location pinged");
export default async function Places({ params }: any) {
  const paramsArr = params.nearby.split("~");

  const lat = Number(paramsArr[0]);
  const long = Number(paramsArr[1]);
  const radius = Number(paramsArr[2]);

  const places = await findPlaces(lat, long, radius);

  const openPlaces = places.results.filter((place: any) => {
    if (!place.opening_hours) {
      return false;
    }
    return place.opening_hours.open_now;
  });
  console.log(openPlaces);

  const locationName: string = places.results[0].name;

  return (
    <Layout>
      <div>
        <h2>You are in {locationName}</h2>
        <PlacesContainer places={openPlaces} origin={{ lat, lng: long }} />
      </div>
    </Layout>
  );
}
