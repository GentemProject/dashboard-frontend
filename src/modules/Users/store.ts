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
};

export const useFiltersStore = create<Store>(set => ({
  page: 1,
  setPage: (state: number) => set({ page: state }),

  limit: 10,
  setLimit: (state: number) => set({ limit: state }),

  sortBy: 'asc',
  setSortBy: (state: SortBy) => set({ sortBy: state }),

  orderBy: 'createdAt',
  setOrderBy: (state: OrderBy) => set({ orderBy: state }),

  query: undefined,
  setQuery: (state: string) => set({ query: state }),
}));
