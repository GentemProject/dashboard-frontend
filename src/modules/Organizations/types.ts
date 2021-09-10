import { Cause } from 'modules/Causes/types';

export interface Organization {
  id: string;
  ownersId: string[];
  causesId: string[];
  causes: Cause[];
  isPublished: boolean;
  slug: string;
  logo: string;
  name: string;
  goal?: string;
  description?: string;
  useDonationsFor?: string;
  email?: string;
  phone?: string;
  website?: string;
  adminFullName?: string;
  adminEmail?: string;
  locations: {
    address: string;
    city: string;
    state: string;
    country: string;
    countryCode: string;
    coordenateX: number;
    coordenateY: number;
  }[];
  socialMedia: {
    key: string;
    name: string;
    url: string;
  }[];
  donations: {
    key: string;
    title: string;
    description: string;
  }[];
  sponsors: {
    name: string;
    imrg: string;
    link: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export type SortBy = 'asc' | 'desc';
export type OrderBy = 'id' | 'name' | 'slug' | 'countries' | 'updatedAt' | 'createdAt';
