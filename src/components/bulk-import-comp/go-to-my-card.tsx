import Image from "next/image";
import { useRouter } from "next/router";

import Button from "@components/common/button";

export default function GotoMyCards() {
  const { push } = useRouter();
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg border flex flex-col gap-y-10 justify-between text-center p-10 rounded-xl bg-white">
        <Image
          src={"/assests/go-to-cart.png"}
          alt={"go-to-cart"}
          width={160}
          height={89}
          className="mx-auto"
        />
        <p className="text-3xl font-medium">
          You have successfully bulk import all your data!
        </p>
        <Button
          className="text-white"
          onClick={() => {
            push("/");
          }}
        >
          Go to my cards
        </Button>
      </div>
    </div>
  );
}
