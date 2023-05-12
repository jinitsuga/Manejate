export const getPosition = async () => {
  if (!navigator.geolocation) {
    return "Geolocation not supported";
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
    },
    () => {
      console.log("couldnt retrieve location");
    }
  );
};
