import Papa from "papaparse";
import { CardDataModel, ParseResult } from "./types";
import { verification } from "./constant";

export async function parseCSV<T>(csvString: File): Promise<ParseResult<T>> {
  return new Promise((resolve) => {
    Papa.parse<T>(csvString, {
      complete: (result) => {
        const parseResult: ParseResult<T> = {
          data: result.data,
          errors: result.errors,
        };
        resolve(parseResult);
      },
      header: true, // Set this to false if your CSV doesn't have headers
      skipEmptyLines: true,
    });
  });
}

export const isObjectEmpty = (objectName: any) =>
  JSON.stringify(objectName) === "{}";

export const verifiedAllFields = (obj: CardDataModel) => {
  const data = Object.entries(obj);
  let error = verification[0];
  data.map((data) => {
    if (data[0] !== "id" && !data[1]) {
      error = verification[1];
      return;
    }
  });
  return error;
};
