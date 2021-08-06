import React from 'react';
import { Heading, Box, Text, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { ListFilters, ModalCreateCause } from './components';
import { List } from './components/List';

export function CausesPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <ModalCreateCause isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Heading as="h2" size="2xl" color="blackAlpha.600">
          Causes
        </Heading>
        <Button leftIcon={<AddIcon />} onClick={onOpen} background="gentem.yellow" color="white">
          Create cause
        </Button>
      </Flex>
      <Text color="gray.500" mb="4" fontSize="sm">
        The place where all causes are. (Lorem ipsum is placeholder text commonly used in the
        graphic, print, and publishing industries for previewing layouts and visual mockups)
      </Text>
      <ListFilters />
      <List />
    </Box>
  );
}
