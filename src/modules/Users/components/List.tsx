import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Box, Skeleton, Heading } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

import { GET_USERS } from '../graphql';
import { User } from '../types';
import { useFiltersStore } from '../store';

import { ListItem } from './ListItem';
import { ListPagination } from './ListPagination';

interface Data {
  users: {
    count: number;
    rows: User[];
  };
}

export function List() {
  const { query, sortBy, orderBy, limit, page } = useFiltersStore();
  const { data, loading } = useQuery<Data>(GET_USERS, {
    variables: {
      query,
      sortBy,
      orderBy,
      limit,
      page,
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

  if (data.users.rows.length === 0) {
    return (
      <Box mb="4" borderRadius="md" overflow="hidden" background="white" boxShadow="lg">
        <Table variant="simple" size="sm">
          <Thead background="gray.100">
            <Tr>
              <Th>Unique ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Is Admin</Th>
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
      <ListPagination totalResults={data.users.count} />
      <Box mb="4" borderRadius="md" overflow="hidden" background="white" boxShadow="lg">
        <Table variant="simple" size="sm">
          <Thead background="gray.100">
            <Tr>
              <Th>Unique ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Is Admin</Th>
              <Th>Updated at</Th>
              <Th>Last Login at</Th>
              <Th>Created at</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.users.rows.map(user => (
              <ListItem key={user.id} user={user} />
            ))}
          </Tbody>
        </Table>
      </Box>
      <ListPagination totalResults={data.users.count} />
      Total of Users: {data.users.count}
    </>
  );
}
