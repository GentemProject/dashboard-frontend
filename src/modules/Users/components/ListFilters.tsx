import React from 'react';
import { Box, Input, Flex, Select, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDebounceCallback } from '@react-hook/debounce';

import { useFiltersStore } from '../store';
import { OrderBy, SortBy } from '../types';

export function ListFilters() {
  const { limit, setLimit, sortBy, setSortBy, orderBy, setOrderBy, setQuery } = useFiltersStore();
  const setQueryDebounced = useDebounceCallback(setQuery, 500);

  return (
    <Box>
      <Flex mb="4">
        <InputGroup mr="4">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search" onChange={e => setQueryDebounced(e.target.value)} />
        </InputGroup>
        <Box width="600px" display="flex">
          <Select
            mr="4"
            placeholder="Order By"
            value={orderBy}
            onChange={e => setOrderBy(e.target.value as OrderBy)}
          >
            <option value="id">Unique ID</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="isAdmin">Is Admin</option>
            <option value="updatedAt">Updated at</option>
            <option value="lastLoginAt">Last Login at</option>
            <option value="createdAt">Created at</option>
          </Select>
          <Select
            mr="4"
            placeholder="Sort By"
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortBy)}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </Select>
          <Select
            placeholder="Limit"
            value={limit}
            onChange={e => setLimit(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </Select>
        </Box>
      </Flex>
    </Box>
  );
}
