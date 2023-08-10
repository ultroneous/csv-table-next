import { CardStoreType, CardsInitialState } from "@utils/types";
import { create } from "zustand";

export const cardInitialState: CardsInitialState = {
  cards: [],
  tableTitle: [],
};

export const useCardsData = create<CardStoreType>((set) => ({
  ...cardInitialState,
  setTableTitle: (payload) =>
    set((state) => ({
      ...state,
      tableTitle: payload,
    })),
  setCards: (payload) =>
    set((state) => ({
      ...state,
      cards: [...state.cards, ...payload],
    })),
  removeCard: (payload) =>
    set((state) => ({
      ...state,
      cards: [...payload],
    })),
}));
