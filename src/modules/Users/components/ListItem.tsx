import { useMutation } from '@apollo/client';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { IconButton, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { client } from 'api';
import { format } from 'date-fns';

import { DELETE_USER } from '../graphql';
import { User } from '../types';
// import { ModalUpdateCause } from './ModalUpdateCause';

interface Props {
  user: User;
}
export function ListItem({ user }: Props) {
  const { onOpen } = useDisclosure();

  const [deleteUser, { loading }] = useMutation(DELETE_USER);

  const handleDelete = async () => {
    try {
      const input = { input: { id: user.id } };
      await deleteUser({ variables: input });
      await client.refetchQueries({
        include: ['getUsers'],
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <Tr key={user.id} fontSize="13px" fontWeight="200">
      <Td>{user.id}</Td>
      <Td>{user.name}</Td>
      <Td>{user.email}</Td>
      <Td>{user.isAdmin}</Td>
      <Td>{format(new Date(user.updatedAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
      <Td>{format(new Date(user.lastLoginAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
      <Td>{format(new Date(user.createdAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
      <Td>
        {/* <ModalUpdateCause isOpen={isOpen} onClose={onClose} cause={cause} /> */}
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
