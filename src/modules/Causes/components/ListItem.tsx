import { useMutation } from '@apollo/client';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { IconButton, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { client } from 'api';
import { format } from 'date-fns';

import { DELETE_CAUSE } from '../graphql';
import { Cause } from '../types';
import { ModalUpdateCause } from './ModalUpdateCause';

interface Props {
  cause: Cause;
}
export function ListItem({ cause }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [deleteCause, { loading }] = useMutation(DELETE_CAUSE);

  const handleDelete = async () => {
    await deleteCause({ variables: { id: cause.id } });
    await client.refetchQueries({
      include: ['getCauses'],
    });
  };

  return (
    <Tr key={cause.id} fontSize="13px" fontWeight="200">
      <Td>{cause.id}</Td>
      <Td>{cause.name}</Td>
      <Td>{cause.slug}</Td>
      <Td>{format(new Date(cause.updatedAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
      <Td>{format(new Date(cause.createdAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
      <Td>
        <ModalUpdateCause isOpen={isOpen} onClose={onClose} cause={cause} />
        <IconButton
          size="xs"
          variant="outline"
          aria-label="Edit"
          icon={<EditIcon />}
          mr="2"
          onClick={onOpen}
        />
        <IconButton
          size="xs"
          variant="outline"
          aria-label="Delete"
          icon={<DeleteIcon />}
          isLoading={loading}
          onClick={handleDelete}
        />
      </Td>
    </Tr>
  );
}
