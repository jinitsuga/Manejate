export const getPosition = async (setPosish: any) => {
  if (!navigator.geolocation) {
    return "Geolocation not supported";
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
    () => {}
  );
};
