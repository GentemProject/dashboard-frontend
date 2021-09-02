import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

export function Home() {
  return (
    <Box px="5em" mt={8}>
      <Heading as="h2" size="2xl" color="blackAlpha.600">
        Home
      </Heading>
    </Box>
  );
}
