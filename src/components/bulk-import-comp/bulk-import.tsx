import { useId } from "react";
import Link from "next/link";

import Button from "@components/common/button";
import FileIcon from "@components/common/icons/file-icon";
import OptionIcon from "@components/common/icons/option-icon";
import { maxSize, validFiles } from "@utils/constant";
import { BulkImportComponentProps } from "@utils/types";

export default function BulkImportComponent({
  handleBack,
  csvFile,
  setCsvFile,
  handleCsvData,
}: BulkImportComponentProps) {
  const id = useId();

  return (
    <>
      <p className="text-3xl text-black font-medium">Bulk import</p>
      <div className="flex flex-col gap-y-5">
        <div>
          <p className="font-medium mb-1">Use our templates</p>
          <p className="text-sm mb-3">
            Use template and populate with your data
          </p>
          <Link
            className="py-3 px-4 flex justify-between border rounded-md items-center"
            download={"Demo-CSV"}
            href={"/assests/demo.csv"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-medium text-sm">CSV template</p>
            <p className="text-primary">Download</p>
          </Link>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Upload your data</p>
          {csvFile ? (
            <div className="py-3 px-4 flex justify-between border rounded-md items-center">
              <p className="font-medium text-sm">{`${csvFile.name}`}</p>
              <button onClick={() => setCsvFile(undefined)}>
                <OptionIcon className="cursor-pointer" width={20} height={20} />
              </button>
            </div>
          ) : (
            <label className="border-dashed border-lightgrey border-2 rounded-xl relative h-44 cursor-pointer flex flex-col justify-center items-center">
              <input
                className="hidden"
                id={id}
                type="file"
                accept=".csv"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    const tempFile = e.target?.files?.[0];
                    if (!validFiles.includes(tempFile.type)) {
                      return;
                    }
                    if (tempFile.size === 0 || tempFile.size > maxSize) {
                      return;
                    }
                    const blob = tempFile.slice(0, tempFile.size);
                    const newFile = new File(
                      [blob],
                      tempFile.name.replaceAll(" ", "")
                    );
                    setCsvFile(newFile);
                  }
                }}
              />

              <div>
                <FileIcon width={48} height={48} className="mx-auto" />
                <p className="text-sm mt-1 text-center">
                  <span className="text-primary">Upload a file&nbsp;</span>
                  or drag and drop <br />
                  <span className="">CSV up to 10MB</span>
                </p>
              </div>
            </label>
          )}
        </div>
        <div className="flex justify-end gap-x-4">
          <Button
            className="bg-transparent border text-black"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button className="text-white" onClick={handleCsvData}>
            Import
          </Button>
        </div>
      </div>
    </>
  );
}
