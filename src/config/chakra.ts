import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Nunito, sans-serif',
    body: 'Nunito, sans-serif',
  },
  fontWeights: {
    normal: 300,
    medium: 400,
    bold: 600,
  },
  colors: {
    gentem: {
      yellow: '#FFCF53',
      purple: '#47398E',
      grey: '#888888',
    },
  },
  components: {
    // Text: {
    // baseStyle: {
    // fontSize: '1rem',
    // },
    // },
    Link: {
      baseStyle: {
        color: 'gentem.purple',
      },
    },
  },
});
