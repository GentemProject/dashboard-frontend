import React from 'react';
import { Heading } from '@chakra-ui/react';
// import { useQuery } from '@apollo/client';

// import { GET_USERS } from 'modules';

export function UsersPage() {
  // const query = useQuery(GET_USERS);

  // console.log({ query });
  return (
    <>
      <Heading as="h2" size="2xl" color="blackAlpha.600">
        Users
      </Heading>
    </>
  );
}
