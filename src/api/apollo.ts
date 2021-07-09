import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { env } from 'config';

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

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
