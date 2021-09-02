import React, { useState } from 'react';
import { Box, Input, Flex, Select, InputGroup, InputLeftElement, Switch } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useDebounceCallback } from '@react-hook/debounce';
import { MultiSelect } from 'react-multi-select-component';

import { useFiltersStore } from '../store';
import { OrderBy, SortBy } from '../types';

import { GET_CAUSES } from 'modules/Causes/graphql';
import { Cause } from 'modules/Causes/types';
import { useQuery } from '@apollo/client';

interface Data {
  causes: Cause[];
}
interface Option {
  value: string;
  label: string;
  key?: string;
  disabled?: boolean;
}

export function ListFilters() {
  const {
    limit,
    setLimit,
    sortBy,
    setSortBy,
    orderBy,
    setOrderBy,
    setQuery,
    setCausesId,
    setCountries,
    hasDonationLinks,
    setHasDonationsLinks,
    hasDonationBank,
    setHasDonationsBank,
    hasDonationProducts,
    setHasDonationsProducts,
  } = useFiltersStore();
  const setQueryDebounced = useDebounceCallback(setQuery, 500);

  const { data, loading } = useQuery<Data>(GET_CAUSES, {
    variables: { sortBy: 'asc', orderBy: 'name' },
  });
  const causes = data?.causes.map(cause => ({ value: cause.id, label: cause.name })) || [];
  const [causesSelected, setCausesSelected] = useState<Option[]>([]);
  const handleCausesSelect = (causes: Option[]) => {
    setCausesSelected(causes);
    const causesId = causes.map(cause => cause.value);
    setCausesId(causesId);
  };

  const countries = [
    {
      value: 'Ecuador',
      label: 'Ecuador',
    },
    {
      value: 'Venezuela',
      label: 'Venezuela',
    },
    {
      value: 'Perú',
      label: 'Perú',
    },
    {
      value: 'Chile',
      label: 'Chile',
    },
    {
      value: 'Colombia',
      label: 'Colombia',
    },
    {
      value: 'Panamá',
      label: 'Panamá',
    },
    {
      value: 'Argentina',
      label: 'Argentina',
    },
    {
      value: 'República Dominicana',
      label: 'República Dominicana',
    },
    {
      value: 'Estados Unidos',
      label: 'Estados Unidos',
    },
    { value: 'México', label: 'México' },
  ];
  const [countriesSelected, setCountriesSelected] = useState<Option[]>([]);
  const handleCountriesSelect = (countries: Option[]) => {
    setCountriesSelected(countries);
    const causesId = countries.map(country => country.value);
    setCountries(causesId);
  };

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
      <Flex display="flex" alignItems="center" mb="4">
        <Box mr="4" w="350px">
          <p>Causes</p>
          <MultiSelect
            options={causes}
            value={causesSelected}
            isLoading={loading}
            labelledBy="Causes"
            onChange={handleCausesSelect}
            disableSearch
            hasSelectAll={false}
          />
        </Box>
        <Box mr="4" w="350px">
          <p>Countries</p>
          <MultiSelect
            options={countries}
            value={countriesSelected}
            isLoading={loading}
            labelledBy="Select"
            onChange={handleCountriesSelect}
            disableSearch
            hasSelectAll={false}
          />
        </Box>
        <Box mr="4">
          <p>Has donations links?</p>
          <Switch
            isChecked={hasDonationLinks}
            onChange={e => setHasDonationsLinks(e.target.checked)}
            size="lg"
          />
        </Box>
        <Box mr="4">
          <p>Has donations bank?</p>
          <Switch
            isChecked={hasDonationBank}
            onChange={e => setHasDonationsBank(e.target.checked)}
            size="lg"
          />
        </Box>
        <Box mr="4">
          <p>Has donations products?</p>
          <Switch
            isChecked={hasDonationProducts}
            onChange={e => setHasDonationsProducts(e.target.checked)}
            size="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
}
