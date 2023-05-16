import { findPlaces } from "@/helpers/location";
import Layout from "@/components/layout";

console.log("location pinged");
export default async function Places({ params }: any) {
  const lat = Number(params.nearby.split("~")[0]);
  const long = Number(params.nearby.split("~")[1]);
  const radius = Number(params.nearby.split("~")[2]);

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

  const locationName: string = places.results[0].name;
  console.log(openPlaces[2].geometry.location);

  return (
    <Layout>
      <div>
        <h2>You are in {locationName}</h2>
      </div>
    </Layout>
  );
}
