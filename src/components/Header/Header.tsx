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
  Tabs,
  TabList,
  Tab,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { useFirebaseAuth } from 'hooks';
import { Link, useHistory } from 'react-router-dom';
import { useLoadingStore, useUserStore } from 'stores';
import { sleep } from 'utils';
import {
  BellIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  SearchIcon,
  SettingsIcon,
} from '@chakra-ui/icons';
import { Logo } from 'components';

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
      py="2"
      background="#fff"
      borderBottom="1px"
      borderColor="#eee"
      px="5em"
    >
      <Box flex="1" display="flex">
        <Link to="/">
          <Box height="40px" mr="8">
            <Logo color="#FFCF53" width={44} />
          </Box>
        </Link>
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              as={Link}
              to="/"
              borderRadius="lg"
              _selected={{
                bg: 'gentem.yellow',
                color: 'white',
                borderRadius: 'lg',
                fontWeight: '700',
              }}
            >
              Home
            </Tab>
            <Tab
              as={Link}
              to="/causes"
              borderRadius="lg"
              _selected={{
                bg: 'gentem.yellow',
                color: 'white',
                borderRadius: 'lg',
                fontWeight: '700',
              }}
            >
              Causes
            </Tab>
            <Tab
              as={Link}
              to="/organizations"
              borderRadius="lg"
              _selected={{
                bg: 'gentem.yellow',
                color: 'white',
                borderRadius: 'lg',
                fontWeight: '700',
              }}
            >
              Organizations
            </Tab>
            <Tab
              as={Link}
              to="/users"
              borderRadius="lg"
              _selected={{
                bg: 'gentem.yellow',
                color: 'white',
                borderRadius: 'lg',
                fontWeight: '700',
              }}
            >
              Users
            </Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box display="flex">
        <InputGroup mr="4" w="300px">
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
          <Input placeholder="Search" borderRadius="md" />
        </InputGroup>
        <IconButton mr="4" variant="outline" aria-label="notifications" icon={<BellIcon />} />
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
      </Box>
    </Flex>
  );
}
