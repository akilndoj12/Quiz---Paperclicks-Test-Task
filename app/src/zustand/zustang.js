import { create } from 'zustand';

export const useStore = create((set) => ({
  pages: 0,
  tedhenatUser: {},
  time: false,
  setTimeMeting: (newBears) => set({ time: newBears }),
  setPages: (newBears) => set({ pages: newBears }),
  setDhenatuser: (newBears) => set({ tedhenatUser: newBears }),
}));
