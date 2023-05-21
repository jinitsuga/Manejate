"use client";
import { useState, useRef, useEffect } from "react";
import MapsContent from "./MapsContent";
import "./placeCard.css";

export type Place = {
  name: string;
  open: boolean;
  lat: number;
  lng: number;
  origin: { lat: number; lng: number };
  types: Array<string>;
  id: string;
};
export default function PlaceCard({
  name,
  open,
  types,
  lat,
  lng,
  id,
  origin,
}: Place) {
  const [routeShown, setRouteShown] = useState<boolean>(false);
  const [mapShown, setMapShown] = useState<boolean>(false);

  // Setting up closing map modal on outside click
  useEffect(() => {
    if (!mapShown) {
      return;
    }
    const handleClick = (event: any) => {};
  }, [mapShown]);

  const map = useRef(null);
  return (
    <div>
      <h4>{name}</h4>
      {open ? <span>OPEN</span> : <span>Closed</span>} <br />
      <span>{types[0]}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          // console.log(process.env.NEXT_PUBLIC_MAPS_KEY);
          setRouteShown(true);
        }}
        className="route-btn"
      >
        Mostrame como ir
      </button>
      {routeShown && (
        <div className="map-modal" ref={map}>
          <MapsContent origin={origin} destinCoords={{ lat, lng }} />
        </div>
      )}
    </div>
  );
}
