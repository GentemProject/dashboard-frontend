import React, { useState } from 'react';
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Input,
  Text,
  Flex,
  Select,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { SearchIcon } from '@chakra-ui/icons';
import { useDebounce } from '@react-hook/debounce';

import { GET_CAUSES } from './queries';
import { Cause } from './types';
import { CauseItem } from './CauseItem';
import { CreateCauseModal } from './CreateCauseModal';

interface Data {
  causes: Cause[];
}

export function CausesPage() {
  const [query, setQuery] = useDebounce<string | undefined>(undefined, 500);
  const [sortBy, setSortBy] = useState<string>('asc');
  const [orderBy, setOrderBy] = useState<string>('name');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, loading } = useQuery<Data>(GET_CAUSES, {
    variables: {
      query,
      sortBy,
      orderBy,
    },
  });

  return (
    <Box>
      <CreateCauseModal isOpen={isOpen} onClose={onClose} />
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Heading as="h2" size="2xl" color="blackAlpha.600">
          Causes
        </Heading>
        <Button onClick={onOpen}>Create cause</Button>
      </Flex>
      <Text color="gray.500" mb="4">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
        industries for previewing layouts and visual mockups.
      </Text>
      <Box mb="4">
        <Flex>
          <InputGroup mr="4">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              colorScheme="green"
              onChange={e => {
                setQuery(e.target.value);
              }}
            />
          </InputGroup>
          <Box width="500px" display="flex">
            <Select
              mr="4"
              placeholder="Order By"
              value={orderBy}
              onChange={e => setOrderBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="slug">Slug</option>
              <option value="updatedAt">Updated At</option>
              <option value="createdAt">Created At</option>
            </Select>
            <Select placeholder="Sort By" value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </Select>
          </Box>
        </Flex>
      </Box>
      <Box mb="4" borderRadius="md" overflow="hidden" background="white" boxShadow="lg">
        <Table variant="simple" size="sm">
          <Thead background="gray.100">
            <Tr>
              <Th>Unique ID</Th>
              <Th>Name</Th>
              <Th>Slug</Th>
              <Th>Updated at</Th>
              <Th>Created at</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading &&
              Array.from(Array(20).keys()).map(item => (
                <Tr key={item}>
                  <Th>
                    <Skeleton h="20px" />
                  </Th>
                  <Th>
                    <Skeleton h="20px" />
                  </Th>
                  <Th>
                    <Skeleton h="20px" />
                  </Th>
                  <Th>
                    <Skeleton h="20px" />
                  </Th>
                  <Th>
                    <Skeleton h="20px" />
                  </Th>
                  <Th>
                    <Skeleton h="20px" />
                  </Th>
                </Tr>
              ))}
            {data && data.causes.map(cause => <CauseItem key={cause.id} cause={cause} />)}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
