import { create } from "zustand";
import { persist } from "zustand/middleware";

type store = {
    language: string
    toggleLanguage: (payload: string) => void
}

export const useWebStore = create<store>()(
  persist(
    (set) => ({
      language: '',
      toggleLanguage: (payload: string) => set(() => ({ language: payload })),
      
    }),
    { name: "web-store" }
  )
);
