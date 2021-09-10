import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input, Textarea } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export function Information() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormControl mb="4" id="name" isInvalid={Boolean(errors.name)}>
        <FormLabel>Name</FormLabel>
        <Input {...register('name')} placeholder="Gentem Ong" />
        <FormErrorMessage mt="1">{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb="4" id="goal" isInvalid={Boolean(errors.goal)}>
        <FormLabel>Goal</FormLabel>
        <Textarea {...register('goal')} />
        <FormErrorMessage mt="1">{errors.goal?.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb="4" id="description" isInvalid={Boolean(errors.description)}>
        <FormLabel>Description</FormLabel>
        <Textarea {...register('description')} />
        <FormErrorMessage mt="1">{errors.goal?.message}</FormErrorMessage>
      </FormControl>

      <FormControl mb="4" id="useDonationsFor" isInvalid={Boolean(errors.useDonationsFor)}>
        <FormLabel>Use Donations For?</FormLabel>
        <Textarea {...register('useDonationsFor')} />
        <FormErrorMessage mt="1">{errors.useDonationsFor?.message}</FormErrorMessage>
      </FormControl>
    </>
  );
}
