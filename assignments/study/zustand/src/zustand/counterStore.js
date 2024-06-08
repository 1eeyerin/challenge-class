import { create } from "zustand";

// 1depth만 immer 지원함
const useCounterStore = create((set, get) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  doubleCount: () => {
    const currentCount = get().count;
    set({ count: currentCount * 2 });
  },
}));

export default useCounterStore;
