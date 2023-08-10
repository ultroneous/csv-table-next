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
  removeCard: (payload: CardDataModel[]) => void;
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
  Company: string;
  Email: string;
  "Full name": string;
  Role: string;
  Title: string;
  id: number;
}

export interface CardsProps {
  tableValues: CardDataModel[];
}

export interface CardProps {
  value: CardDataModel;
}
