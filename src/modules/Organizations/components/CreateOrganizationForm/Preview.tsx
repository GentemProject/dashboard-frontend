import { Heading, Box, Text, Flex } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export function Preview() {
  const { watch } = useFormContext();

  return (
    <Box
      boxShadow="0px 0px 10px rgba(17, 17, 17, 0.1);"
      background="white"
      borderRadius="3xl"
      overflow="hidden"
    >
      <Box h="120px" bg="gray.200"></Box>
      <Box px="1em">
        <Box mt="-40px" mb="25px">
          <Flex
            w="80px"
            h="80px"
            borderRadius="3xl"
            overflow="hidden"
            background="white"
            boxShadow="0px 0px 10px rgba(17, 17, 17, 0.1);"
            alignItems="center"
            justifyContent="center"
            zIndex="10"
            position="relative"
          >
            <img
              src="https://www.gentem.org/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fgentem.org%2Fngos%2F0%2Flogo.png&w=1920&q=75"
              alt="Prev Logo"
            />
          </Flex>
        </Box>
        <Box mb="8">
          <Heading size="lg" mb="5px" color="gentem.purple">
            {watch('name') || 'Title'}
          </Heading>
          <Text fontSize="md" mb="24px" whiteSpace="pre-wrap">
            {watch('goal') || 'Your goal'}
            <br />
            {watch('description') || 'Your description'}
          </Text>

          {watch('useDonationsFor') && (
            <>
              <Heading size="sm" mb="5px" color="gentem.purple">
                ¿Cómo usamos las donaciones que recibimos?
              </Heading>
              <Text fontSize="md" whiteSpace="pre-wrap">
                {watch('useDonationsFor')}
              </Text>
            </>
          )}

          <Heading size="md" mb="24px" color="gentem.purple">
            Contacto
          </Heading>
          <Text fontSize="md">{watch('email') || 'your@email.com'}</Text>
          <Text fontSize="md">{watch('website') || 'https://yourwebsite.com'}</Text>
          <Text fontSize="md">{watch('phone') || '0987654321'}</Text>
        </Box>
      </Box>
    </Box>
  );
}
