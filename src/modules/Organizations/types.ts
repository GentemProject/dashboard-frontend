import { Cause } from 'modules/Causes/types';

export interface Organization {
  id: string;
  ownerId?: string;
  causesId: string[];
  causes: Cause[];
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
  addresses?: string[];
  cities?: string[];
  states?: string[];
  countries?: string[];
  coordenateX?: number[];
  coordenateY?: number[];
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  whatsappUrl?: string;
  donationLinks?: string[];
  donationsProducts?: string;
  donationBankAccountName?: string;
  donationBankAccountType?: string;
  donationBankAccountNumber?: string;
  hasDonationLinks?: boolean;
  hasDonationBank?: boolean;
  hasDonationProducts?: boolean;
  createdAt: string;
  updatedAt: string;
}

export type SortBy = 'asc' | 'desc';
export type OrderBy = 'id' | 'name' | 'slug' | 'cities' | 'countries' | 'updatedAt' | 'createdAt';
