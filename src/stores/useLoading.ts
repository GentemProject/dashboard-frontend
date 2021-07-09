import create from 'zustand';

type Store = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useLoadingStore = create<Store>(set => ({
  isLoading: true,
  setIsLoading: (state: boolean) => set({ isLoading: state }),
}));
