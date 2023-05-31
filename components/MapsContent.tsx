"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import "./placeCard.css";
import {
  LoadScript,
  GoogleMap,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

type mapContent = {
  origin: { lat: number; lng: number };
  destinationId?: string;
  destinCoords: { lat: number; lng: number };
  closeMap?: any;
  mapElement?: any;
  mapShown?: boolean;
};

const apiKey: string = process.env.NEXT_PUBLIC_MAPS_KEY!;

const MapsContent: FC<mapContent> = ({ origin, destinCoords, closeMap }) => {
  const [directions, setDirections] = useState<any>();
  useEffect(() => {
    const checkForClick = (e: any) => {
      if (map.current && !map.current.contains(e.target)) {
        closeMap(false);
      }
    };
    document.addEventListener("click", checkForClick, true);
    return () => {
      document.removeEventListener("click", checkForClick);
    };
  }, []);

  const map = useRef<HTMLDivElement>(null);

  const renderRoute = (directions: any) => {
    if (directions) {
      return <DirectionsRenderer directions={directions} />;
    }
    return null;
  };

  return (
    <div className="map-modal" ref={map}>
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
              origin: origin,
              travelMode: "WALKING" as google.maps.TravelMode,
            }}
            callback={(result, status) => {
              if (status === "OK" && !directions) {
                setDirections(result);
              }
            }}
          ></DirectionsService>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapsContent;
