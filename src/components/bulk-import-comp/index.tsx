import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Image from "next/image";

import Backward from "@components/common/icons/back-arrow";
import { useCardsData } from "@store/store";
import { parseCSV } from "@utils/helper";
import { showToastMessage } from "@components/common/toaster";
import { alertMsg } from "@utils/constant";

const GotoMyCards = dynamic(() => import("./go-to-my-card"), {
  ssr: false,
});
const Overview = dynamic(() => import("./overview"), {
  ssr: false,
});
const BulkImportComponent = dynamic(() => import("./bulk-import"), {
  ssr: false,
});

export default function CsvImportComponent() {
  const { back } = useRouter();

  const setCards = useCardsData((state) => state.setCards);

  const [activeStep, setActiveStep] = useState<number>(0);
  const [csvFile, setCsvFile] = useState<File>();

  const handleCsvData = async () => {
    if (!csvFile) {
      showToastMessage(alertMsg.emptyUpload, { color: "error" });
      return;
    }
    const rowsArray: any[] = [];
    const titles: any[] = [];
    const result = await parseCSV(csvFile);
    const value: any[] = [];

    result.data.map((d: any, i: number) => {
      rowsArray.push(Object.keys(d));
      value.push({ id: i, ...d });
    });

    rowsArray[0].map((val: string) => {
      titles.push(val.toLowerCase().replaceAll(" ", ""));
    });

    setCards(value);

    setActiveStep(1);
  };

  const getComponent = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <BulkImportComponent
            handleBack={handleBack}
            csvFile={csvFile}
            setCsvFile={setCsvFile}
            handleCsvData={handleCsvData}
          />
        );

      case 1:
        return (
          <Overview setActiveStep={setActiveStep} handleBack={handleBack} />
        );

      case 2:
        return <GotoMyCards />;

      default:
        break;
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      back();
      return;
    }
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div className="flex justify-between px-5 py-3">
        <button
          className="flex items-center gap-x-1 text-primary"
          onClick={handleBack}
        >
          <Backward width={20} height={16} />
          Back
        </button>
        <Image
          className="cursor-pointer"
          src={"/assests/logo.svg"}
          alt={"Logo"}
          width={150}
          height={32}
        />
        <button className="py-2.5 px-5 border rounded-md">Dashboard</button>
      </div>
      <div className="p-20 flex flex-col gap-y-10">
        {getComponent(activeStep)}
      </div>
    </>
  );
}
