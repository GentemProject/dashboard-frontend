import { gql } from '@apollo/client';

export const CAUSE_FRAGMENT = gql`
  fragment CauseFragment on Cause {
    id
    name
    slug
    updatedAt
    createdAt
  }
`;

export const GET_CAUSES = gql`
  ${CAUSE_FRAGMENT}
  query getCauses($query: String, $sortBy: String, $orderBy: String) {
    causes(query: $query, sortBy: $sortBy, orderBy: $orderBy) {
      ...CauseFragment
    }
  }
`;

export const DELETE_CAUSE = gql`
  mutation deleteCause($id: String!) {
    isDeleted: deleteCause(id: $id)
  }
`;

export const CREATE_CAUSE = gql`
  ${CAUSE_FRAGMENT}
  mutation createCause($input: CauseInput) {
    cause: createCause(input: $input) {
      ...CauseFragment
    }
  }
`;

export const UPDATE_CAUSE = gql`
  ${CAUSE_FRAGMENT}
  mutation updateCause($id: String!, $input: CauseInput) {
    cause: updateCause(id: $id, input: $input) {
      ...CauseFragment
    }
  }
`;
