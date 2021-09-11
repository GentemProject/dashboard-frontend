import { useQuery } from '@apollo/client';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input, Select, SimpleGrid } from '@chakra-ui/react';
import { GET_ORGANIZATIONS_FILTERS_DATA } from 'modules/Organizations/graphql';
import { useFormContext } from 'react-hook-form';

interface Data {
  countries: {
    name: string;
    code: string;
  }[];
}

export function Location() {
  const { data, loading } = useQuery<Data>(GET_ORGANIZATIONS_FILTERS_DATA);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControl id="address" isInvalid={Boolean(errors.address)} mb="4">
        <FormLabel>Address</FormLabel>
        <Input {...register('address')} />
        <FormErrorMessage mt="1">{errors.address?.message}</FormErrorMessage>
      </FormControl>

      <SimpleGrid columns={2} spacing={2} mb="4">
        <FormControl id="city" isInvalid={Boolean(errors.city)}>
          <FormLabel>City</FormLabel>
          <Input {...register('city')} />
          <FormErrorMessage mt="1">{errors.city?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="state" isInvalid={Boolean(errors.state)}>
          <FormLabel>State</FormLabel>
          <Input {...register('state')} />
          <FormErrorMessage mt="1">{errors.state?.message}</FormErrorMessage>
        </FormControl>
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={2} mb="4">
        <FormControl id="country" isInvalid={Boolean(errors.country)}>
          <FormLabel>Country</FormLabel>
          <Select placeholder="Country" {...register('country')} disabled={loading}>
            {data?.countries.map(country => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </Select>
          <FormErrorMessage mt="1">{errors.country?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="country" isInvalid={Boolean(errors.country)}>
          <FormLabel>Country Code</FormLabel>
          <Input {...register('countryCode')} disabled />
          <FormErrorMessage mt="1">{errors.country?.message}</FormErrorMessage>
        </FormControl>
      </SimpleGrid>

      <SimpleGrid columns={2} spacing={2} mb="4">
        <FormControl id="coordenateX" isInvalid={Boolean(errors.coordenateX)}>
          <FormLabel>Coordenate X</FormLabel>
          <Input {...register('coordenateX')} />
          <FormErrorMessage mt="1">{errors.coordenateX?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="coordenateY" isInvalid={Boolean(errors.coordenateY)}>
          <FormLabel>Coordenate Y</FormLabel>
          <Input {...register('coordenateY')} />
          <FormErrorMessage mt="1">{errors.coordenateY?.message}</FormErrorMessage>
        </FormControl>
      </SimpleGrid>
    </>
  );
}
