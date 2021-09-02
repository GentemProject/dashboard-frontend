// import { useMutation } from '@apollo/client';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Avatar,
  IconButton,
  Popover,
  // PopoverArrow,
  PopoverBody,
  PopoverContent,
  // PopoverHeader,
  PopoverTrigger,
  Tag,
  Td,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import { client } from 'api';
import { format } from 'date-fns';

import { Organization } from '../types';

// import { DELETE_USER } from '../graphql';
// import { User } from '../types';
// import { ModalUpdateCause } from './ModalUpdateCause';

interface Props {
  organization: Organization;
}
export function ListItem({ organization }: Props) {
  const { onOpen } = useDisclosure();

  // const [deleteUser, { loading }] = useMutation(DELETE_USER);

  const handleDelete = async () => {
    try {
      const input = { input: { id: organization.id } };
      console.log({ input });
      // await deleteUser({ variables: input });
      // await client.refetchQueries({
      //   include: ['getUsers'],
      // });
    } catch {
      console.log('error');
    }
  };

  return (
    <Tr key={organization.id} fontSize="13px" fontWeight="200">
      <Td>
        <Popover variant="hover" size="sm">
          <PopoverTrigger>
            <Avatar
              size="2xs"
              name={organization.name}
              src={organization.logo}
              mr="2"
              _hover={{ cursor: 'pointer' }}
            />
          </PopoverTrigger>
          <PopoverContent w="150px">
            <PopoverBody textAlign="center">
              <Avatar size="2xl" name={organization.name} src={organization.logo} mr="2" />
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Link to={`/organizations/${organization.slug}`}>{organization.name}</Link>
      </Td>
      <Td>{organization.cities && organization.cities[0]}</Td>
      <Td>
        {organization.countries?.map(country => (
          <Tag size="sm" key={country} mr="2">
            {country}
          </Tag>
        ))}
      </Td>
      <Td>
        {organization.causes.map(cause => (
          <Tag size="sm" key={cause.id} mr="2">
            {cause.name}
          </Tag>
        ))}
      </Td>
      <Td>{format(new Date(organization.updatedAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
      <Td>{format(new Date(organization.createdAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
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
          // isLoading={loading}
          onClick={handleDelete}
        />
      </Td>
    </Tr>
  );
}
