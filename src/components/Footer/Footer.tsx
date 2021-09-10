import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { Container, CustomIcon } from 'components';

export function Footer() {
  return (
    <Container>
      <Flex justify="space-between" mt="20" py="4">
        {/* <VStack> */}
        <Box>
          <Text fontWeight="700" mb="16px">
            Terminos y condiciones
          </Text>
          <Text fontWeight="700" mb="16px">
            Politica de privacidad
          </Text>
          <Text fontWeight="700" mb="16px">
            Preguntas frecuentes
          </Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Box textAlign="right">
            <Box mb="4">
              <CustomIcon name="facebook" mr="4" />
              <CustomIcon name="twitter" mr="4" />
              <CustomIcon name="instagram" mr="4" />
              <CustomIcon name="linkedin" />
            </Box>
            <Box textAlign="right">
              Hecho con{' '}
              <Box display="inline">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'inline', marginRight: '3px' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.36802 8.87486L2.10748 9.69041L7.53302 15.6783C7.76583 15.8841 7.88357 15.9954 8 16C8.11638 15.9954 8.23417 15.8842 8.46698 15.6783L13.8925 9.69041L14.632 8.87486C16.456 6.77268 16.456 3.33054 14.632 1.22832C12.9764 -0.683314 10.2992 -0.204622 8.52995 1.57134C8.20266 1.89911 8.08764 2.06219 8 2.06068C7.91236 2.06219 7.79734 1.89911 7.47005 1.57134C5.70078 -0.204622 3.02363 -0.683314 1.36802 1.22832C-0.456008 3.33054 -0.456008 6.77268 1.36802 8.87486Z"
                    fill="#47398E"
                  />
                </svg>
              </Box>
              por el equipo de gentem
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
