import { findPlaces } from "@/helpers/location";

console.log("location pinged");
export default async function Places({ params }: any) {
  const lat = Number(params.nearby.split("~")[0]);
  const long = Number(params.nearby.split("~")[1]);
  const radius = Number(params.nearby.split("~")[2]);

  const places = await findPlaces(lat, long, radius);
  console.log(places);

  const locationName: string = places.results[0].name;

  return (
    <div>
      <h2>You are in {locationName} </h2>
    </div>
  );
}
