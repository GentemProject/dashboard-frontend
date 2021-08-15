import create from 'zustand';
import { User } from '../modules';

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
  removeUser: () => void;
};

export const useUserStore = create<Store>(set => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
  removeUser: () => set({ user: null }),
}));
