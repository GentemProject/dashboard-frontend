import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/react';

export function Step4() {
  return (
    <>
      <FormControl id="rmail" mb="4">
        <FormLabel>Facebook</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="phonr" mb="4">
        <FormLabel>Twitter</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="website" mb="4">
        <FormLabel>Instagram</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="adminFullName" mb="4">
        <FormLabel>Linkedin</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="adminEmail" mb="4">
        <FormLabel>Youtube</FormLabel>
        <Input />
      </FormControl>
    </>
  );
}
