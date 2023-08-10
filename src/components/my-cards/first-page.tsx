import Image from "next/image";

export default function FirstPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-6 mt-6">
      <button>
        <Image
          src={"/assests/create-icon.svg"}
          alt={"create-icon"}
          width={100}
          height={90}
        />
      </button>
      <div className="max-w-2xl text-center flex flex-col gap-y-2">
        <p className="text-black font-medium">No cards, yet</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra orci
          luctus semper congue sit sed vel vitae. Mauris in turpis adipiscing
          nunc ut amet ultrices.
        </p>
      </div>
    </div>
  );
}
