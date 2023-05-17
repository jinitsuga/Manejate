export type Place = {
  name: string;
  open: boolean;
  lat: number;
  lng: number;
  types: Array<string>;
  id: string;
};
export default function PlaceCard({ name, open, types }: Place) {
  return (
    <div>
      <h4>{name}</h4>
      {open ? <span>OPEN</span> : <span>Closed</span>} <br />
      <span>{types[0]}</span>
    </div>
  );
}
