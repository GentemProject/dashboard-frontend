import { DeleteIcon, EditIcon, HamburgerIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Td,
  Tr,
} from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
// import { client } from 'api';
import { format } from 'date-fns';

import { Organization } from '../types';
import { useMutation } from '@apollo/client';
import { UPDATE_ORGANIZATION } from '../graphql';
import { client } from 'api';

// import { DELETE_USER } from '../graphql';
// import { User } from '../types';
// import { ModalUpdateCause } from './ModalUpdateCause';

interface Props {
  organization: Organization;
}
export function ListItem({ organization }: Props) {
  const history = useHistory();
  const [updateOrganization, { loading }] = useMutation(UPDATE_ORGANIZATION);

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

  const handleIsPublished = async (isPublished: boolean) => {
    try {
      const variables = { id: organization.id, input: { isPublished } };
      await updateOrganization({ variables });
      await client.refetchQueries({
        include: ['getOrganizations'],
      });
    } catch (error) {
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
      <Td>
        {organization.locations.length > 0 &&
          organization.locations.map(location => (
            <Box key={location.address}>
              {location.address && location.address + ', '}
              {location.city && location.city + ', '}
              {location.state && location.state + ', '}
              {location.country && location.country + ', '}
              {location.countryCode}
            </Box>
          ))}
      </Td>
      <Td>
        {organization.causes.map(cause => (
          <Tag size="sm" key={cause.id} mr="2">
            {cause.name}
          </Tag>
        ))}
        {organization.causes.length === 0 && 'No causes'}
      </Td>
      <Td>
        {organization.isPublished ? (
          <Tag size="sm" colorScheme="green" borderRadius="full" variant="solid">
            Published
          </Tag>
        ) : (
          <Tag size="sm" colorScheme="red" borderRadius="full" variant="solid">
            Not published
          </Tag>
        )}
      </Td>
      <Td>{format(new Date(organization.createdAt), 'hh:mm:ss dd/MM/yyyy')}</Td>
      <Td>
        <Box display="flex" justifyContent="flex-end">
          <Menu>
            <MenuButton as={IconButton} size="xs" isLoading={loading}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Menu">
                {organization.isPublished ? (
                  <MenuItem icon={<ViewOffIcon />} onClick={() => handleIsPublished(false)}>
                    Disable
                  </MenuItem>
                ) : (
                  <MenuItem icon={<ViewIcon />} onClick={() => handleIsPublished(true)}>
                    Enable
                  </MenuItem>
                )}
                <MenuItem
                  icon={<EditIcon />}
                  onClick={() => window.open(`/organizations/${organization.slug}`, '_blank')}
                >
                  Preview
                </MenuItem>
                <MenuItem
                  icon={<EditIcon />}
                  onClick={() => history.push(`/organizations/${organization.slug}/edit`)}
                >
                  Edit
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<DeleteIcon />} onClick={handleDelete}>
                  Delete
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Td>
    </Tr>
  );
}
