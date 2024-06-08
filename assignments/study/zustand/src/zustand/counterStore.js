import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  plus: () => set((prev) => ({ count: prev.count + 1 })),
  minus: () => set((prev) => ({ count: prev.count - 1 })),
}));

export default useCounterStore;
