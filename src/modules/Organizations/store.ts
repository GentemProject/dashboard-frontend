import create from 'zustand';
import { SortBy, OrderBy } from './types';

type Store = {
  limit: number;
  setLimit: (state: number) => void;

  page: number;
  setPage: (state: number) => void;

  sortBy: SortBy;
  setSortBy: (state: SortBy) => void;

  orderBy: OrderBy;
  setOrderBy: (state: OrderBy) => void;

  query: string | undefined;
  setQuery: (state: string) => void;

  causesId: string[];
  setCausesId: (string: string[]) => void;

  countries: string[];
  setCountries: (string: string[]) => void;

  hasDonationLinks: boolean;
  setHasDonationsLinks: (isActive: boolean) => void;

  hasDonationBank: boolean;
  setHasDonationsBank: (isActive: boolean) => void;

  hasDonationProducts: boolean;
  setHasDonationsProducts: (isActive: boolean) => void;
};

export const useFiltersStore = create<Store>(set => ({
  page: 1,
  setPage: (state: number) => set({ page: state }),

  limit: 20,
  setLimit: (state: number) => set({ limit: state }),

  sortBy: 'asc',
  setSortBy: (state: SortBy) => set({ sortBy: state }),

  orderBy: 'name',
  setOrderBy: (state: OrderBy) => set({ orderBy: state }),

  query: undefined,
  setQuery: (state: string) => set({ query: state }),

  causesId: [],
  setCausesId: (state: string[]) => set({ causesId: state }),

  countries: [],
  setCountries: (state: string[]) => set({ countries: state }),

  hasDonationLinks: false,
  setHasDonationsLinks: (state: boolean) => set({ hasDonationLinks: state }),

  hasDonationBank: false,
  setHasDonationsBank: (state: boolean) => set({ hasDonationBank: state }),

  hasDonationProducts: false,
  setHasDonationsProducts: (state: boolean) => set({ hasDonationProducts: state }),
}));
