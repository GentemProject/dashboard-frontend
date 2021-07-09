import { gql } from '@apollo/client';
export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    name
    email
  }
`;

export const GET_ME = gql`
  ${USER_FRAGMENT}
  query getMe {
    user: getMe {
      ...UserFragment
    }
  }
`;
