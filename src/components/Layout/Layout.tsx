import React from 'react';

import { ErrorModal, Header, Loading } from 'components';
import { useUserStore } from 'stores';
import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  const { user } = useUserStore();

  return (
    <Box mb="16">
      <ErrorModal />
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
