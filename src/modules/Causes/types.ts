export interface Cause {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface Form {
  name: string;
}

export type SortBy = 'asc' | 'desc';
export type OrderBy = 'id' | 'name' | 'slug' | 'updatedAt' | 'createdAt';
