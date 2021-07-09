import create from 'zustand';
import { UserType } from '../modules';

export const useUser = create(set => ({
  user: null,
  setUser: (user: UserType) => set({ user }),
  removeUser: () => set({ user: null }),
}));

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
