import create from 'zustand';
import { SortBy, OrderBy } from './types';

type Store = {
  sortBy: SortBy;
  setSortBy: (state: SortBy) => void;

  orderBy: OrderBy;
  setOrderBy: (state: OrderBy) => void;

  query: string | undefined;
  setQuery: (state: string) => void;
};

export const useFiltersStore = create<Store>(set => ({
  sortBy: 'asc',
  setSortBy: (state: SortBy) => set({ sortBy: state }),

  orderBy: 'createdAt',
  setOrderBy: (state: OrderBy) => set({ orderBy: state }),

  query: undefined,
  setQuery: (state: string) => set({ query: state }),
}));
