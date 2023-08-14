import { ComponentPropsWithRef, ReactNode, SVGProps } from "react";

export interface ContainerPropsType {
  children: ReactNode;
  className?: string;
}

export interface ButtonPropsType extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
}

export type SvgPropsType = SVGProps<SVGSVGElement>;

export interface CardsInitialState {
  cards: CardDataModel[];
  tableTitle: string[];
}

export interface CardStoreType extends CardsInitialState {
  setCards: (payload: CardDataModel[]) => void;
  setTableTitle: (payload: string[]) => void;
  addCards: (payload: CardDataModel[]) => void;
  removeCard: (id: number) => void;
}

export interface BulkImportComponentProps {
  csvFile: File | undefined;
  handleBack: () => void;
  setCsvFile: (e: File | undefined) => void;
  handleCsvData: () => void;
}

export interface OverviewProps {
  setActiveStep: (e: number) => void;
  handleBack: () => void;
}
export interface CardDataModel {
  company: string;
  email: string;
  name: string;
  role: string;
  title: string;
  status?: "verified" | "unverified";
  id: number;
}

export interface CardsProps {
  tableValues: CardDataModel[];
}

export interface CardProps {
  value: CardDataModel;
}

export interface Option {
  label: string;
  value: string;
}

export interface ParseResult<T> {
  data: T[];
  errors: Papa.ParseError[];
}
