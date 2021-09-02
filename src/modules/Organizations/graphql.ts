import { gql } from '@apollo/client';
import { CAUSE_FRAGMENT } from 'modules/Causes/graphql';

export const ORGANIZATION_FRAGMENT = gql`
  ${CAUSE_FRAGMENT}
  fragment OrganizationFragment on Organization {
    id
    ownerId
    causesId
    causes {
      ...CauseFragment
    }
    slug
    logo
    name
    goal
    description
    useDonationsFor
    email
    phone
    website
    adminFullName
    adminEmail
    addresses
    cities
    states
    countries
    coordenateX
    coordenateY
    facebookUrl
    instagramUrl
    twitterUrl
    whatsappUrl
    donationLinks
    donationsProducts
    donationBankAccountName
    donationBankAccountType
    donationBankAccountNumber
    hasDonationLinks
    hasDonationBank
    hasDonationProducts
    createdAt
    updatedAt
  }
`;

export const GET_ORGANIZATIONS = gql`
  ${ORGANIZATION_FRAGMENT}
  query getOrganizations(
    $query: String
    $page: Float
    $limit: Float
    $orderBy: String
    $sortBy: String
    $causesId: [String]
    $countries: [String]
    $hasDonationLinks: Boolean
    $hasDonationBank: Boolean
    $hasDonationProducts: Boolean
  ) {
    organizations(
      query: $query
      page: $page
      limit: $limit
      orderBy: $orderBy
      sortBy: $sortBy
      causesId: $causesId
      countries: $countries
      hasDonationLinks: $hasDonationLinks
      hasDonationBank: $hasDonationBank
      hasDonationProducts: $hasDonationProducts
    ) {
      count
      rows {
        ...OrganizationFragment
      }
    }
  }
`;

export const GET_ORGANIZATION = gql`
  ${ORGANIZATION_FRAGMENT}
  query getOrganization($id: String, $slug: String) {
    organization(id: $id, slug: $slug) {
      ...OrganizationFragment
    }
  }
`;
