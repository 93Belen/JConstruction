import { create } from "zustand";
import { persist } from "zustand/middleware";

type store = {
    language: string
    toggleLanguage: (payload: string) => void,
    emailsent: boolean,
    toggleEmailSent: (payload: boolean) => void
}

export const useWebStore = create<store>()(
  persist(
    (set) => ({
      language: 'english',
      toggleLanguage: (payload: string) => set(() => ({ language: payload })),
      emailsent: true,
      toggleEmailSent: (payload: boolean) => set(() => ({ emailsent: payload }))
    }),
    { name: "web-store" }
  )
);
