import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Box, Skeleton, Heading } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

import { GET_ORGANIZATIONS } from '../graphql';
import { Organization } from '../types';
import { useFiltersStore } from '../store';

import { ListItem } from './ListItem';
import { ListPagination } from './ListPagination';

interface Data {
  organizations: {
    count: number;
    rows: Organization[];
  };
}

function ListHeading() {
  return (
    <Tr>
      <Th>Name</Th>
      <Th>City</Th>
      <Th>Country</Th>
      <Th>Causes</Th>
      <Th>Updated at</Th>
      <Th>Created at</Th>
      <Th>Actions</Th>
    </Tr>
  );
}

export function List() {
  const {
    query,
    sortBy,
    orderBy,
    limit,
    page,
    causesId,
    countries,
    hasDonationBank,
    hasDonationLinks,
    hasDonationProducts,
  } = useFiltersStore();
  console.log({
    query,
    sortBy,
    orderBy,
    limit,
    page,
    causesId,
    countries,
    hasDonationBank,
    hasDonationLinks,
    hasDonationProducts,
  });
  const { data, loading } = useQuery<Data>(GET_ORGANIZATIONS, {
    variables: {
      query,
      sortBy,
      orderBy,
      limit,
      page,
      causesId,
      countries,
      hasDonationBank,
      hasDonationLinks,
      hasDonationProducts,
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
            </Tr>{' '}
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

  if (data.organizations.rows.length === 0) {
    return (
      <Box mb="4" borderRadius="md" overflow="hidden" background="white" boxShadow="lg">
        <Table variant="simple" size="sm">
          <Thead background="gray.100">
            <ListHeading />
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
      <ListPagination totalResults={data.organizations.count} />
      <Box mb="4" borderRadius="md" overflow="hidden" background="white" boxShadow="lg">
        <Table variant="simple" size="sm">
          <Thead background="gray.100">
            <ListHeading />
          </Thead>
          <Tbody>
            {data.organizations.rows.map(organization => (
              <ListItem key={organization.id} organization={organization} />
            ))}
          </Tbody>
        </Table>
      </Box>
      <ListPagination totalResults={data.organizations.count} />
      Total of Organizations: {data.organizations.count}
    </>
  );
}
