import create from 'zustand';
import { UserType } from '../modules';

type Store = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  removeUser: () => void;
};

export const useUserStore = create<Store>(set => ({
  user: null,
  setUser: (user: UserType | null) => set({ user }),
  removeUser: () => set({ user: null }),
}));
