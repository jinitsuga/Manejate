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
  console.log("getposition is being run ");
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
