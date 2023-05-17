import { useEffect, useState, FC } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

type mapContent = {
  origin: { lat: number; lng: number };
  destinationId: string;
};

const mapsContent: FC<mapContent> = ({ origin, destinationId }) => {
  // const [startingPoint, setStartingPoint] = useState<typeof origin | null>(
  //   null
  // );

  // useEffect(() => {}, []);

  const renderRoute = (directions: any) => (
    <DirectionsRenderer directions={directions} />
  );

  return (
    <GoogleMap id="map" zoom={10} center={origin}>
      <DirectionsService
        options={{
          destination: destinationId,
          origin: origin,
          travelMode: "WALKING" as google.maps.TravelMode,
        }}
        callback={(result, status) => {
          if (status === "OK") {
            renderRoute(result);
          }
        }}
      ></DirectionsService>
    </GoogleMap>
  );
};

export default mapsContent;
