import { extendTheme } from '@chakra-ui/react';

const light = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'white', // Your desired background color
        color: 'black', // Your desired text color
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

const dark = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'black', // Your desired background color
        color: 'gray', // Your desired text color
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

const red = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'red', // Your desired background color
        color: 'black', // Your desired text color
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
});

const green = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'green', // Your desired background color
        color: 'green:500', // Your desired text color
      },
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});

export { light, dark, red, green };
