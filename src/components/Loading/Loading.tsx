import React from 'react';
import { Box, CircularProgress } from '@chakra-ui/react';
import { useLoadingStore } from 'stores';

export function Loading() {
  const { isLoading } = useLoadingStore();

  return (
    <Box
      position="fixed"
      width="full"
      height="full"
      top="0"
      left="0"
      background="gentem.yellow"
      justifyContent="center"
      alignItems="center"
      transition="0.5s all"
      display="flex"
      opacity={isLoading ? 1 : 0}
      zIndex={isLoading ? '100' : '-10'}
    >
      <Box textAlign="center">
        <img src="/logoDefault.png" />
        <CircularProgress isIndeterminate color="white" thickness="4px" />
      </Box>
    </Box>
  );
}
