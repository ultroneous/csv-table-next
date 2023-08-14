import { createColumnHelper } from "@tanstack/react-table";
import { EditCell } from "./edit-cell";
import { TableCell } from "./table-cell";
import { CardDataModel } from "@utils/types";
import { VerifiedCell } from "./verified-cell";

const columnHelper = createColumnHelper<CardDataModel>();

export const columns = [
  columnHelper.accessor("name", {
    header: "Full Name",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("company", {
    header: "Company",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("title", {
    header: "Title",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("role", {
    header: "Role",
    cell: TableCell,
    meta: {
      type: "text",
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: VerifiedCell,
  }),
  columnHelper.display({
    id: "edit",
    cell: EditCell,
  }),
];
