import Papa from "papaparse";

interface ParseResult<T> {
  data: T[];
  errors: Papa.ParseError[];
}

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
