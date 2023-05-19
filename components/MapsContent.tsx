"use client";
import { FC, useState, useEffect } from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

type mapContent = {
  origin: { lat: number; lng: number };
  destinationId?: string;
  destinCoords: { lat: number; lng: number };
};

const apiKey: string = process.env.NEXT_PUBLIC_MAPS_KEY!;

const MapsContent: FC<mapContent> = ({
  origin,
  destinationId,
  destinCoords,
}) => {
  const [directions, setDirections] = useState<any>();

  const renderRoute = (directions: any) => {
    if (directions) {
      console.log("directions are ok");
      return <DirectionsRenderer directions={directions} />;
    }
    return null;
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "500px", height: "100%" }}
        id="map"
        zoom={16}
        center={origin}
      >
        {directions && renderRoute(directions)}
        <DirectionsService
          options={{
            destination: destinCoords,
            origin: { lat: -34.6657801, lng: -54.1536834 },
            travelMode: "WALKING" as google.maps.TravelMode,
          }}
          callback={(result, status) => {
            if (status === "OK" && !directions) {
              console.log("DIRECTIONS OK");
              setDirections(result);
            }
          }}
        ></DirectionsService>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapsContent;
