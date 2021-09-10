import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Textarea } from '@chakra-ui/react';

export function Step5() {
  return (
    <>
      <FormControl id="rmail" mb="4">
        <FormLabel>Donations Bank</FormLabel>
        <Textarea />
      </FormControl>
      <FormControl id="phonr" mb="4">
        <FormLabel>Donations Products</FormLabel>
        <Textarea />
      </FormControl>
      <FormControl id="website" mb="4">
        <FormLabel>Donations Links</FormLabel>
        <Textarea />
      </FormControl>
    </>
  );
}
