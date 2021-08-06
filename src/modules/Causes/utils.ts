import { createStandaloneToast } from '@chakra-ui/react';
import { client } from 'api';

const toast = createStandaloneToast();

export async function refetch() {
  try {
    await client.refetchQueries({
      include: ['getCauses'],
    });
  } catch (error) {
    toast({
      title: 'An error occurred.',
      description: 'We cannot refetch causes',
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  }
}
