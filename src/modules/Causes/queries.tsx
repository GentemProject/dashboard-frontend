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

export const DELETE_CAUSE = gql`
  mutation deleteCause($id: String!) {
    isDeleted: deleteCause(id: $id)
  }
`;

export const CREATE_CAUSE = gql`
  mutation createCause($input: CauseInput) {
    cause: createCause(input: $input) {
      id
    }
  }
`;
