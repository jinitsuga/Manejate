"use client";
import { useState, useEffect } from "react";
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
export default function PlaceCard({ name, open, lat, lng, id, origin }: Place) {
  const [routeShown, setRouteShown] = useState<boolean>(false);

  // Setting up closing map modal on outside click

  return (
    <div className="cardContainer">
      <h4>{name}</h4>
      {open ? (
        <span className="greenText">Abierto</span>
      ) : (
        <span>Cerrado</span>
      )}{" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(origin);
          setRouteShown(true);
        }}
        className="route-btn"
      >
        Cómo ir
      </button>
      {routeShown ? (
        <div className="map-modal">
          <MapsContent
            mapShown={routeShown}
            closeMap={setRouteShown}
            origin={origin}
            destinCoords={{ lat, lng }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
