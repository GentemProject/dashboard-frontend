import React from 'react';
import {
  Heading,
  Box,
  Text,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export function CreateOrganizationsPage() {
  return (
    <Box px="5em" mt={8}>
      <Box mt="28" mx="auto" w="600px">
        <Box textAlign="center" mb="12">
          <Heading as="h2" size="2xl" color="blackAlpha.600">
            Create a new organization
          </Heading>
          <Text color="gray.500" mb="4" fontSize="lg">
            We have 200 organizations that are changing the world.
          </Text>
        </Box>
        <Box>
          <FormControl id="name" mb="4">
            <FormLabel>Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="goal" mb="4">
            <FormLabel>Goal</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="description" mb="4">
            <FormLabel>Description</FormLabel>
            <Textarea />
          </FormControl>
          <FormControl id="description" mb="4">
            <FormLabel>Use donations for?</FormLabel>
            <Textarea />
          </FormControl>

          <Box display="flex" justifyContent="flex-end">
            <Button rightIcon={<ArrowForwardIcon />}> Next </Button>
          </Box>
          <FormControl id="rmail" mb="4">
            <FormLabel>Organization email</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="phonr" mb="4">
            <FormLabel>Organization phone</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="website" mb="4">
            <FormLabel>Organization website</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="adminFullName" mb="4">
            <FormLabel>Admin full name</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="adminEmail" mb="4">
            <FormLabel>Admin email</FormLabel>
            <Input />
          </FormControl>
          <Box display="flex" justifyContent="flex-end">
            <Button rightIcon={<ArrowForwardIcon />}> Next </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
