import axios from "axios";

export const getPosition = async (setPosish: any) => {
  if (!navigator.geolocation) {
    console.log("navigator not supported");
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setPosish({
        coords: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
        time: position.timestamp,
      });
    },
    () => {},
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
  );
};

export const watchPosition = async (setPosish: any) => {
  if (!navigator.geolocation) {
    return "geolocation not supported";
  }
  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      setPosish({
        coords: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
        time: position.timestamp,
      });
    },
    () => {},
    { enableHighAccuracy: true, maximumAge: 10000, timeout: 6000 }
  );

  return watchId;
};

export const findPlaces = async (lat: number, long: number, radius: number) => {
  const reqUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&openNow=${true}&key=${
    process.env.MAPS_KEY
  }`;
  const res = await fetch(reqUrl);
  const data = res.json();
  return data;
};
