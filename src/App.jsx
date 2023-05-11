import { useState } from 'react';
import { Box, Button, ChakraProvider, IconButton } from '@chakra-ui/react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { light, dark, red, green } from './hooks/theme';
import { MoonIcon, StarIcon, ViewIcon, SunIcon } from '@chakra-ui/icons';

function App() {
  const [count, setCount] = useState(0);
  const themes = {
    light: light,
    dark: dark,
    red: red,
    green: green,
  };

  const [currentThemeName, setCurrentThemeName] = useState('red');

  function toggleTheme() {
    setCurrentThemeName((prevThemeName) => {
      switch (prevThemeName) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'red';
        case 'red':
          return 'green';
        case 'green':
          return 'light';
        default:
          return 'light';
      }
    });
  }
  const currentTheme = themes[currentThemeName];
  console.log('currentThemeName', currentThemeName);

  return (
    <ChakraProvider theme={currentTheme}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Box>{currentThemeName}</Box>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <IconButton
        onClick={toggleTheme}
        icon={currentThemeName === 'light' ? <SunIcon /> : currentThemeName === 'dark' ? <MoonIcon /> : currentThemeName === 'red' ? <StarIcon /> : <ViewIcon />}
        aria-label="Toggle color mode"
        size="lg"
        // variant="ghost"
        variant="icon-button"
        display={{ base: 'none', md: 'flex' }}
      />
    </ChakraProvider>
  );
}

export default App;
