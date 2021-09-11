import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { FormErrorMessage, Input, SimpleGrid } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export function Contact() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <FormControl mb="4" id="email" isInvalid={Boolean(errors.email)}>
        <FormLabel>Organization Email</FormLabel>
        <Input {...register('email')} type="email" />
        <FormErrorMessage mt="1">{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb="4" id="phone" isInvalid={Boolean(errors.phone)}>
        <FormLabel>Organization Phone</FormLabel>
        <Input {...register('phone')} />
        <FormErrorMessage mt="1">{errors.phone?.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb="4" id="website" isInvalid={Boolean(errors.website)}>
        <FormLabel>Organization Website</FormLabel>
        <Input {...register('website')} />
        <FormErrorMessage mt="1">{errors.website?.message}</FormErrorMessage>
      </FormControl>

      <SimpleGrid columns={2} spacing={2} mb="4">
        <FormControl id="adminFullName" isInvalid={Boolean(errors.adminFullName)}>
          <FormLabel>Admin full name</FormLabel>
          <Input {...register('adminFullName')} />
          <FormErrorMessage mt="1">{errors.adminFullName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl id="adminEmail" isInvalid={Boolean(errors.adminEmail)}>
          <FormLabel>Admin email</FormLabel>
          <Input {...register('adminEmail')} />
          <FormErrorMessage mt="1">{errors.adminEmail?.message}</FormErrorMessage>
        </FormControl>
      </SimpleGrid>
    </>
  );
}
