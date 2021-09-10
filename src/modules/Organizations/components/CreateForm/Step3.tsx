import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/react';

export function Step3() {
  return (
    <>
      <FormControl id="rmail" mb="4">
        <FormLabel>Address</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="phonr" mb="4">
        <FormLabel>City</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="website" mb="4">
        <FormLabel>State</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="adminFullName" mb="4">
        <FormLabel>Country</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="adminEmail" mb="4">
        <FormLabel>coordenateX</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="adminEmail" mb="4">
        <FormLabel>coordenateY</FormLabel>
        <Input />
      </FormControl>
    </>
  );
}
