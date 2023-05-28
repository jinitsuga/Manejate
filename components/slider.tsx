"use client";

type SliderType = {
  radius: number;
  setRadius: React.Dispatch<React.SetStateAction<number>>;
};

export default function Slider({ setRadius, radius }: SliderType) {
  //   const [radius, setRadius] = useState<number>(500);
  return (
    <>
      <h3>Radio de búsqueda:</h3>
      <span>{radius}</span>
      <input
        type="range"
        min={500}
        max={5000}
        step={500}
        aria-orientation="horizontal"
        onChange={(e) => setRadius(Number(e.target.value))}
      ></input>
    </>
  );
}
