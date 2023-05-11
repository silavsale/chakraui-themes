import { extendTheme } from '@chakra-ui/react';

const light = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'white',
        color: 'black',
        minHeight: '100vh',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
  components: {
    Button: {
      baseStyle: {
        // bg: 'red.400',
        // color: 'green.200',
        boxShadow: '1px 1px 1px 1px gray',
      },
      variants: {
        'icon-button': {
          bg: 'white',
          color: 'gray.500',
          boxShadow: '1px 1px 1px 1px gray',

          _hover: {
            transform: 'scale(1.05)',
            color: 'gray.700',
          },
        },
      },
    },
  },
});

const dark = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'black',
        color: 'gray',
        minHeight: '100vh',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
  components: {
    Button: {
      baseStyle: {
        // bg: 'black',
        // color: 'green.200',
        boxShadow: '1px 1px 1px 1px white',
      },
      variants: {
        'icon-button': {
          bg: 'white',
          color: 'gray.500',
          boxShadow: '1px 1px 1px 1px white',

          _hover: {
            transform: 'scale(1.05)',
            color: 'white',
          },
        },
      },
    },
  },
});

const red = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'red',
        color: 'black',
        minHeight: '100vh',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
  components: {
    Button: {
      baseStyle: {
        // bg: 'red.400',
        // color: 'green.200',
        boxShadow: '1px 1px 1px 1px gray',
      },
      variants: {
        'icon-button': {
          bg: 'white',
          color: 'gray.500',
          boxShadow: '1px 1px 1px 1px gray',

          _hover: {
            transform: 'scale(1.05)',
            color: 'gray.700',
          },
        },
      },
    },
  },
});

const green = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'green',
        color: 'green:500',
        minHeight: '100vh',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
  },
  components: {
    Button: {
      baseStyle: {
        // bg: 'red.400',
        // color: 'green.200',
        boxShadow: '1px 1px 1px 1px gray',
      },
      variants: {
        'icon-button': {
          bg: 'white',
          color: 'gray.500',
          boxShadow: '1px 1px 1px 1px gray',

          _hover: {
            transform: 'scale(1.05)',
            color: 'gray.700',
          },
        },
      },
    },
  },
});

export { light, dark, red, green };
