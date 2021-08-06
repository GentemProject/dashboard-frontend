import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Box, Skeleton, Heading } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

import { GET_CAUSES } from '../graphql';
import { Cause } from '../types';
import { useFiltersStore } from '../store';

import { ListItem } from './ListItem';

interface Data {
  causes: Cause[];
}

export function List() {
  const { query, sortBy, orderBy } = useFiltersStore();
  const { data, loading } = useQuery<Data>(GET_CAUSES, {
    variables: {
      query,
      sortBy,
      orderBy,
    },
  });

  if (loading || !data) {
    return (
      <Box mb="4" borderRadius="md" overflow="hidden" background="white" boxShadow="lg">
        <Table variant="simple" size="sm">
          <Thead background="gray.100">
            <Tr>
              <Th>
                <Box h="15px" />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from(Array(20).keys()).map(item => (
              <Tr key={item}>
                <Th>
                  <Skeleton h="19px" />
                </Th>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }

  if (data.causes.length === 0) {
    return (
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
        </Table>
        <Box display="flex" alignItems="center" justifyContent="center" height="200px">
          <Heading fontSize="lg">No results</Heading>
        </Box>
      </Box>
    );
  }

  return (
    <>
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
            {data.causes.map(cause => (
              <ListItem key={cause.id} cause={cause} />
            ))}
          </Tbody>
        </Table>
      </Box>
      Total of Causes: {data.causes.length}
    </>
  );
}
