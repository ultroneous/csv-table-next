import React from "react";
import dynamic from "next/dynamic";

import Button from "@components/common/button";
import DropdownButton from "@components/common/drop-down-btn";
import { useCardsData } from "@store/store";

const Cards = dynamic(() => import("./cards"), {
  ssr: false,
});
const FirstPage = dynamic(() => import("./first-page"), {
  ssr: false,
});

export default function MyCards() {
  const tableValues = useCardsData((state) => state.cards);

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <p className="text-2xl">My cards</p>
        <div className="flex gap-x-4">
          <DropdownButton />
          <Button className="text-white">Create new digital card</Button>
        </div>
      </div>
      {tableValues.length > 0 ? (
        <Cards tableValues={tableValues} />
      ) : (
        <FirstPage />
      )}
    </div>
  );
}
