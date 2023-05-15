import { findPlaces } from "@/helpers/location";

console.log("location pinged");
export default async function Places({ params }: any) {
  const { nearby } = params;

  console.log(params.nearby.split("~"));
  // const places = await findPlaces(lat, long, radius);
  return (
    <div>
      <ul>
        <li>{nearby}</li>
        {/* <li>{long}</li>
        <li>{radius}</li> */}
      </ul>
    </div>
  );
}
