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
  addCards: (payload) =>
    set((state) => ({
      ...state,
      cards: [...state.cards, ...payload],
    })),
  setCards: (payload) =>
    set((state) => ({
      ...state,
      cards: [...payload],
    })),
  removeCard: (id: number) =>
    set((state) => {
      const tmpArray = [...state.cards];
      tmpArray.splice(Number(id), 1);
      return {
        ...state,
        cards: [...tmpArray],
      };
    }),
}));
