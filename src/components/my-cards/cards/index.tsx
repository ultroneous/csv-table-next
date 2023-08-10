import { CardsProps } from "@utils/types";
import Card from "./card";

export default function Cards({ tableValues }: CardsProps) {
  return (
    <div className="grid grid-cols-4 gap-10 mt-6">
      {tableValues.map((val, i) => {
        return <Card key={`${val}-${i}`} value={val} />;
      })}
    </div>
  );
}
