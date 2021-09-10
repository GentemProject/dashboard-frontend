import { gql } from '@apollo/client';
import { CAUSE_FRAGMENT } from 'modules/Causes/graphql';

export const ORGANIZATION_FRAGMENT = gql`
  ${CAUSE_FRAGMENT}
  fragment OrganizationFragment on Organization {
    id
    ownersId
    causesId
    causes {
      ...CauseFragment
    }
    isPublished
    name
    slug
    logo
    goal
    description
    useDonationsFor
    email
    phone
    website
    adminFullName
    adminEmail
    locations {
      address
      city
      state
      country
      countryCode
      coordenateX
      coordenateY
    }
    socialMedia {
      key
      name
      url
    }
    donations {
      key
      title
      description
    }
    sponsors {
      name
      img
      link
    }
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

export const UPDATE_ORGANIZATION = gql`
  ${ORGANIZATION_FRAGMENT}
  mutation updateOrganization($id: String!, $input: OrganizationInput) {
    cause: updateOrganization(id: $id, input: $input) {
      ...OrganizationFragment
    }
  }
`;

export const GET_ORGANIZATIONS_FILTERS_DATA = gql`
  ${CAUSE_FRAGMENT}
  query getOrganizationsFilterData($sortBy: String, $orderBy: String) {
    causes(sortBy: $sortBy, orderBy: $orderBy) {
      ...CauseFragment
    }
    countries {
      name
      code
    }
  }
`;
