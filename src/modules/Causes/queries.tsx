import { gql } from '@apollo/client';

export const GET_CAUSES = gql`
  query getCauses($query: String, $sortBy: String, $orderBy: String) {
    causes(query: $query, sortBy: $sortBy, orderBy: $orderBy) {
      id
      name
      slug
      createdAt
      updatedAt
    }
  }
`;
