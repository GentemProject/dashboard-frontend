export interface User {
  id: string;
  firebaseId: string;
  isAdmin: boolean;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string;
}

export type SortBy = 'asc' | 'desc';
export type OrderBy = 'id' | 'name' | 'email' | 'updatedAt' | 'createdAt';
