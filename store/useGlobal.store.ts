import { create } from "zustand";

interface GlobalProps {
  isQuickAccessOpen: boolean;
  setQuickAccessOpen: (isQuickAccessOpen: boolean) => void;
}

const useGlobalStore = create<GlobalProps>((set) => ({
  isQuickAccessOpen: false,
  setQuickAccessOpen: (isQuickAccessOpen: boolean) =>
    set({ isQuickAccessOpen }),
}));

export default useGlobalStore;
