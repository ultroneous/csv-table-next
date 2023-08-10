import Image from "next/image";

import Identification from "@components/common/icons/identification";
import VerifiedContainedIcon from "@components/common/icons/verified-contained";
import { CardProps } from "@utils/types";

export default function Card({ value }: CardProps) {
  const profileText = value?.["Full name"]
    ?.split(" ")
    .reduce((acc: string, val: string) => `${acc} ${val[0]}`, "");
  return (
    <div className="border rounded-lg shadow-md flex flex-col py-6 px-5 gap-y-4 justify-between items-center">
      <div className="border-2 rounded-full p-3 relative">
        <Image
          src={"/assests/profile-round-bg.svg"}
          alt={"profile-logo"}
          width="40"
          height="40"
        />
        <VerifiedContainedIcon
          className="absolute bottom-0 right-0"
          width="24"
          height="24"
        />
        <p className="uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-black rounded-full">
          {profileText}
        </p>
      </div>
      <div className="text-center">
        <p>{value?.["Full name"]}</p>
        <p>@{value?.["Full name"]?.toLowerCase().replaceAll(" ", "")}</p>
      </div>
      <div className="flex gap-x-2">
        <Identification width={24} height={24} />
        <p>0 linked physical cards </p>
      </div>
    </div>
  );
}
