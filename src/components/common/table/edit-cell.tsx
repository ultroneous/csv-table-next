import { MouseEvent } from "react";
import EditIcon from "../icons/edit-icon";
import SaveIcon from "../icons/save-icon";
import DeleteIcon from "../icons/delete-icon";
import { useCardsData } from "@store/store";

export const EditCell = ({ row, table }: any) => {
  const meta = table.options.meta;

  const [removeCard, cards] = useCardsData((state) => [
    state.removeCard,
    state.cards,
  ]);

  const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
    const elName = e.currentTarget.name;
    meta?.setEditedRows((old: []) => ({
      ...old,
      [row.id]: !old[row.id],
    }));
    if (elName !== "edit") {
      meta?.revertData(row.index, e.currentTarget.name === "cancel");
    }
  };

  const handleDelete = (index: number) => {
    removeCard(index);
  };

  return (
    <div className="flex gap-x-6">
      {meta?.editedRows[row.id] ? (
        <button className="text-center" onClick={setEditedRows}>
          <SaveIcon width={20} height={21} />
        </button>
      ) : (
        <button className="text-center" onClick={setEditedRows}>
          <EditIcon width={20} height={20} />
        </button>
      )}
      <button onClick={() => handleDelete(row.id)} name="delete">
        <DeleteIcon width={20} height={20} />
      </button>
    </div>
  );
};
