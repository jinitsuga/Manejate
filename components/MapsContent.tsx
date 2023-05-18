"use client";
import { FC } from "react";
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
  const renderRoute = (directions: any) => (
    <DirectionsRenderer directions={directions} />
  );
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap id="map" zoom={10} center={origin}>
        <DirectionsService
          options={{
            destination: destinCoords,
            origin: { lat: -34.6657801, lng: -54.1536834 },
            travelMode: "WALKING" as google.maps.TravelMode,
          }}
          callback={(result, status) => {
            if (status === "OK") {
              renderRoute(result);
            }
          }}
        ></DirectionsService>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapsContent;
