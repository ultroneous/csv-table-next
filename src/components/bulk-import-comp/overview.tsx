import Button from "@components/common/button";
import { useCardsData } from "@store/store";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { OverviewProps } from "@utils/types";
import { useEffect, useState } from "react";
import { columns } from "@components/common/table/columns";

export default function Overview({ setActiveStep, handleBack }: OverviewProps) {
  const [tableValues, setCards] = useCardsData((state) => [
    state.cards,
    state.setCards,
  ]);

  const [data, setData] = useState(() => [...tableValues]);
  const [originalData, setOriginalData] = useState(() => [...tableValues]);
  const [editedRows, setEditedRows] = useState({});

  useEffect(() => {
    setData(tableValues);
  }, [tableValues]);

  const handleTableData = () => {
    setCards(data);
    setActiveStep(2);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      editedRows,
      setEditedRows,
      revertData: (rowIndex: number, revert: boolean) => {
        if (revert) {
          setData((old) =>
            old.map((row, index) =>
              index === rowIndex ? originalData[rowIndex] : row
            )
          );
        } else {
          setOriginalData((old) =>
            old.map((row, index) => (index === rowIndex ? data[rowIndex] : row))
          );
        }
      },
      updateData: (rowIndex: number, columnId: string, value: string) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    },
  });

  return (
    <>
      <div>
        <p className="font-medium text-3xl">Overview</p>
        <p>58 items successfully added, 2 items failed.</p>
      </div>
      <div className="max-h-96 relative overflow-y-auto shadow-md rounded-lg ">
        {tableValues.length > 0 ? (
          <table className="w-full text-left">
            <thead className="sticky top-0 right-0 text-sm font-normal text-secondary-typography bg-secondary">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-6 py-3" scope="col">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="overflow-auto bg-white">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-6 whitespace-nowrap text-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : undefined}
      </div>
      <div className="flex justify-end gap-x-4">
        <Button
          className="bg-transparent border text-black"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button className="text-white" onClick={handleTableData}>
          Import
        </Button>
      </div>
    </>
  );
}
