import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    firebaseId
    isAdmin
    name
    email
    createdAt
    updatedAt
    lastLoginAt
  }
`;

export const GET_USERS = gql`
  ${USER_FRAGMENT}
  query getUsers($query: String, $page: Float, $limit: Float, $orderBy: String, $sortBy: String) {
    users(query: $query, page: $page, limit: $limit, orderBy: $orderBy, sortBy: $sortBy) {
      count
      rows {
        ...UserFragment
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($input: DeleteUserInput) {
    isDeleted: deleteUser(input: $input)
  }
`;

export const CREATE_CAUSE = gql`
  ${USER_FRAGMENT}
  mutation createCause($input: CauseInput) {
    cause: createCause(input: $input) {
      ...CauseFragment
    }
  }
`;

export const UPDATE_CAUSE = gql`
  ${USER_FRAGMENT}
  mutation updateCause($id: String!, $input: CauseInput) {
    cause: updateCause(id: $id, input: $input) {
      ...CauseFragment
    }
  }
`;
