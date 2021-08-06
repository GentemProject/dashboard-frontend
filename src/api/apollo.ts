import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { createStandaloneToast } from '@chakra-ui/react';

import { env } from 'config';

const toast = createStandaloneToast();

const httpLink = createHttpLink({
  uri: `${env.API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const auth_token = localStorage.getItem('auth_token');

  return {
    headers: {
      ...headers,
      authorization: auth_token ? `Bearer ${auth_token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  toast({
    title: 'An error occurred.',
    description:
      (graphQLErrors && graphQLErrors[0].message) ||
      networkError?.message ||
      'Please try again in a few minutes.',
    status: 'error',
    duration: 9000,
    isClosable: true,
  });
});

export const client = new ApolloClient({
  link: authLink.concat(from([errorLink, httpLink])),
  cache: new InMemoryCache(),
});
