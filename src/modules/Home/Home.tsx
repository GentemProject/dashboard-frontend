import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

export function Home() {
  return (
    <Box px="5em" mt={8}>
      <Heading as="h2" size="lg" color="blackAlpha.600">
        Your organizations
      </Heading>
    </Box>
  );
}
