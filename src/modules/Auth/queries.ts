import { gql } from '@apollo/client';
import { USER_FRAGMENT } from 'modules/User/queries';

export const REGISTER = gql`
  ${USER_FRAGMENT}
  mutation register($firebaseId: String!, $name: String!, $email: String!, $password: String!) {
    user: register(
      input: { firebaseId: $firebaseId, name: $name, email: $email, password: $password }
    ) {
      ...UserFragment
    }
  }
`;

export const LOGIN = gql`
  ${USER_FRAGMENT}
  mutation login($email: String!, $password: String!) {
    user: login(input: { email: $email, password: $password }) {
      ...UserFragment
    }
  }
`;
