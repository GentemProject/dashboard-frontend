import { Box } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  marginTop?: boolean;
}

export function Container({ children, marginTop }: Props) {
  return (
    <Box px="5em" mt={marginTop ? 8 : 0}>
      {children}
    </Box>
  );
}
