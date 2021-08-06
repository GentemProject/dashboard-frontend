import { useMutation } from '@apollo/client';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { IconButton, Td, Tr } from '@chakra-ui/react';
import { client } from 'api';
import { format } from 'date-fns';

import { DELETE_CAUSE } from './queries';
import { Cause } from './types';

interface Props {
  cause: Cause;
}
export function CauseItem({ cause }: Props) {
  const [deleteCause, { loading }] = useMutation(DELETE_CAUSE);

  return (
    <Tr key={cause.id}>
      <Td>{cause.id}</Td>
      <Td>{cause.name}</Td>
      <Td>{cause.slug}</Td>
      <Td>{format(new Date(cause.updatedAt), 'hh:mm:ss dd/mm/yyyy')}</Td>
      <Td>{format(new Date(cause.createdAt), 'hh:mm:ss dd/mm/yyyy')}</Td>
      <Td>
        <IconButton size="xs" variant="outline" aria-label="Edit" icon={<EditIcon />} mr="2" />
        <IconButton
          size="xs"
          variant="outline"
          aria-label="Delete"
          icon={<DeleteIcon />}
          isLoading={loading}
          onClick={async () => {
            await deleteCause({ variables: { id: cause.id } });
            await client.refetchQueries({
              include: ['getCauses'],
            });
          }}
        />
      </Td>
    </Tr>
  );
}
