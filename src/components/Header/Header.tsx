import React from 'react';
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Avatar,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useFirebaseAuth } from 'hooks';
import { useHistory } from 'react-router-dom';
import { useLoadingStore, useUserStore } from 'stores';
import { sleep } from 'utils';
import { ChevronDownIcon, ExternalLinkIcon, SearchIcon, SettingsIcon } from '@chakra-ui/icons';

export function Header() {
  const history = useHistory();
  const userStore = useUserStore();
  const loadingStore = useLoadingStore();
  const firebase = useFirebaseAuth();

  const handleLogout = async () => {
    loadingStore.setIsLoading(true);
    await firebase.signOut();
    await sleep(500);
    history.push('/auth/login');
    await sleep(1000);
    localStorage.removeItem('auth_token');
    userStore.setUser(null);
    loadingStore.setIsLoading(false);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      py="2"
      background="#fff"
      px="2em"
    >
      <Box w="400px">
        <InputGroup>
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
          <Input placeholder="Search" colorScheme="green" />
        </InputGroup>
      </Box>
      <Box display="block" flexBasis="auto">
        <Menu>
          <MenuButton
            variant="outline"
            as={Button}
            leftIcon={
              <Avatar
                size="sm"
                name={userStore.user?.name}
                bg="gentem.yellow"
                border="1px"
                borderColor="white"
                color="white"
              />
            }
            rightIcon={<ChevronDownIcon />}
          >
            {userStore.user?.name}
          </MenuButton>
          <MenuList color="blackAlpha.600">
            <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            <MenuDivider />
            <MenuItem icon={<ExternalLinkIcon />} onClick={handleLogout}>
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
