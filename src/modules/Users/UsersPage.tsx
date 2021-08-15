import React from 'react';
import { Heading, Box, Text, Flex, Button, Icon } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { List, ListFilters } from './components';

export function UsersPage() {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Heading as="h2" size="2xl" color="blackAlpha.600">
          Users
        </Heading>
        <div>
          <Button
            leftIcon={
              <Icon viewBox="0 0 200 200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </Icon>
            }
            mr="4"
          >
            Refresh
          </Button>
          <Button leftIcon={<AddIcon />} background="gentem.yellow" color="white">
            Create user
          </Button>
        </div>
      </Flex>
      <Text color="gray.500" mb="4" fontSize="sm">
        The place where all users are.
      </Text>
      <ListFilters />
      <List />
    </Box>
  );
}
