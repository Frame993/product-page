import { create } from "zustand";

interface CartState {
  cart: number;
  counter: number;
  addToCart: () => void;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}

export const useCart = create<CartState>((set) => ({
  cart: 0,
  counter: 0,
  addToCart: () => set((state) => ({ cart: state.counter })),
  increase: (by: number) => set((state) => ({ counter: state.counter + by })),
  decrease: (by: number) =>
    set((state) => ({ counter: state.counter === 0 ? 0 : state.counter - by })),
}));
