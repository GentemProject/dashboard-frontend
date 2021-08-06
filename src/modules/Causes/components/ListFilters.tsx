import React from 'react';
import { Box, Input, Flex, Select, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDebounceCallback } from '@react-hook/debounce';

import { useFiltersStore } from '../store';
import { OrderBy, SortBy } from '../types';

export function ListFilters() {
  const { sortBy, setSortBy, orderBy, setOrderBy, setQuery } = useFiltersStore();
  const setQueryDebounced = useDebounceCallback(setQuery, 500);

  return (
    <Box mb="4">
      <Flex>
        <InputGroup mr="4">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search" onChange={e => setQueryDebounced(e.target.value)} />
        </InputGroup>
        <Box width="500px" display="flex">
          <Select
            mr="4"
            placeholder="Order By"
            value={orderBy}
            onChange={e => setOrderBy(e.target.value as OrderBy)}
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="slug">Slug</option>
            <option value="updatedAt">Updated At</option>
            <option value="createdAt">Created At</option>
          </Select>
          <Select
            placeholder="Sort By"
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortBy)}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </Select>
        </Box>
      </Flex>
    </Box>
  );
}
