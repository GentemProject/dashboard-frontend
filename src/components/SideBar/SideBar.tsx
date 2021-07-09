import React from 'react';
import { Box, Center, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function SideBar() {
  return (
    <>
      <Center>
        <img src="/logoDefault.png" />
      </Center>
      <VStack spacing={4} align="stretch">
        <Link to="/">
          <Box
            color="white"
            fontWeight="600"
            fontSize="18px"
            px=".5em"
            py=".3em"
            borderRadius="lg"
            transition="all .3s"
            _hover={{
              background: 'whiteAlpha.500',
              color: 'whiteAlpha.900',
            }}
          >
            Home
          </Box>
        </Link>
        <Link to="/">
          <Box
            color="white"
            fontWeight="600"
            fontSize="18px"
            px=".5em"
            py=".3em"
            borderRadius="lg"
            transition="all .3s"
            _hover={{
              background: 'whiteAlpha.500',
              color: 'whiteAlpha.900',
            }}
          >
            My Organizations
          </Box>
        </Link>

        <Link to="/">
          <Box
            color="white"
            fontWeight="600"
            fontSize="18px"
            px=".5em"
            py=".3em"
            borderRadius="lg"
            transition="all .3s"
            _hover={{
              background: 'whiteAlpha.500',
              color: 'whiteAlpha.900',
            }}
          >
            Users
          </Box>
        </Link>

        <Link to="/">
          <Box
            color="white"
            fontWeight="600"
            fontSize="18px"
            px=".5em"
            py=".3em"
            borderRadius="lg"
            transition="all .3s"
            _hover={{
              background: 'whiteAlpha.500',
              color: 'whiteAlpha.900',
            }}
          >
            Organizations
          </Box>
        </Link>

        <Link to="/">
          <Box
            color="white"
            fontWeight="600"
            fontSize="18px"
            px=".5em"
            py=".3em"
            borderRadius="lg"
            transition="all .3s"
            _hover={{
              background: 'whiteAlpha.500',
              color: 'whiteAlpha.900',
            }}
          >
            Causes
          </Box>
        </Link>

        <Link to="/">
          <Box
            color="white"
            fontWeight="600"
            fontSize="18px"
            px=".5em"
            py=".3em"
            borderRadius="lg"
            transition="all .3s"
            _hover={{
              background: 'whiteAlpha.500',
              color: 'whiteAlpha.900',
            }}
          >
            Settings
          </Box>
        </Link>
      </VStack>
    </>
  );
}
