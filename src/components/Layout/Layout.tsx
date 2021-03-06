import React from 'react';

import { Header, Loading, SideBar } from 'components';
import { useUserStore } from 'stores';
import { Box, Flex } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}
export function Layout({ children }: Props) {
  const { user } = useUserStore();

  return (
    <>
      <Loading />
      {user ? (
        <Flex>
          <Box width="250px" px="1em" py="2em" background="gentem.yellow">
            <SideBar />
          </Box>
          <Box flex="1" background="#f5f7fb" px="2em">
            <Header />
            {children}
          </Box>
        </Flex>
      ) : (
        children
      )}
    </>
  );
}
