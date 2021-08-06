import React from 'react';

import { Header, Loading } from 'components';
import { useUserStore } from 'stores';
import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  const { user } = useUserStore();

  return (
    <Box>
      <Loading />
      {user ? (
        <>
          <Header />
          <Box px="5em">{children}</Box>
        </>
      ) : (
        children
      )}
    </Box>
  );
}
