import Button from "@components/common/button";
import DeleteIcon from "@components/common/icons/delete-icon";
import EditIcon from "@components/common/icons/edit-icon";
import VerifiedIcon from "@components/common/icons/verified-icon";
import { useCardsData } from "@store/store";
import { overviewTableHeaders } from "@utils/constant";
import { OverviewProps } from "@utils/types";

export default function Overview({ setActiveStep, handleBack }: OverviewProps) {
  const tableValues = useCardsData((state) => state.cards);
  const removeCard = useCardsData((state) => state.removeCard);

  const handleTableData = () => {
    setActiveStep(2);
  };

  const handleDelete = (index: number) => {
    const tmpArray = [...tableValues];
    tmpArray.splice(index, 1);
    removeCard(tmpArray);
  };

  return (
    <>
      <div>
        <p className="font-medium text-3xl">Overview</p>
        <p>58 items successfully added, 2 items failed.</p>
      </div>
      <div className="max-h-96 relative overflow-y-auto shadow-md rounded-lg ">
        {tableValues.length > 0 ? (
          <table className="w-full text-left ">
            <thead className="sticky top-0 right-0 text-sm font-normal text-secondary-typography bg-secondary">
              <tr>
                {overviewTableHeaders.map((val) => (
                  <th key={val} className="px-6 py-3" scope="col">
                    {val}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="overflow-auto bg-white">
              {tableValues.map((val, index) => (
                <tr key={val?.["id"]} className="border-b">
                  <td className="px-6 py-6 whitespace-nowrap text-sm">
                    {val?.["Full name"]}
                  </td>
                  <td className="px-6 py-6 text-sm">{val?.["Email"]}</td>
                  <td className="px-6 py-6 text-sm text-primary-typography">
                    {val?.["Company"]}
                  </td>
                  <td className="px-6 py-6 text-sm">{val?.["Title"]}</td>
                  <td className="px-6 py-6 text-sm">{val?.["Role"]}</td>
                  <td className="px-6 py-6 text-sm">
                    <VerifiedIcon width={21} height={21} />
                  </td>
                  <td className="py-6 text-sm text-primary-typography flex gap-x-6">
                    <button className="text-center">
                      <EditIcon width={20} height={20} />
                    </button>
                    <button onClick={() => handleDelete(index)}>
                      <DeleteIcon width={20} height={20} />
                    </button>
                  </td>
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
