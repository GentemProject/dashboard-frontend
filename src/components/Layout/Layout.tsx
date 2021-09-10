import React from 'react';

import { ErrorModal, Footer, Header, Loading } from 'components';
import { useUserStore } from 'stores';
import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  const { user } = useUserStore();

  return (
    <Box>
      <ErrorModal />
      <Loading />
      {user ? (
        <>
          <Header />
          {children}
        </>
      ) : (
        children
      )}
      <Footer />
    </Box>
  );
}
