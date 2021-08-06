import create from 'zustand';

interface ErrorModal {
  message: string;
  title: string;
}

type Store = {
  errorModal: ErrorModal | null;
  setErrorModal: (state: ErrorModal | null) => void;
};

export const useErrorStore = create<Store>(set => ({
  errorModal: null,
  setErrorModal: (state: ErrorModal | null) => set({ errorModal: state }),
}));
