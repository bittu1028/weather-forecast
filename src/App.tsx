import React from 'react';
import { AppStyles } from './StyledApp';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import HomePage from './container/HomePage/HomePage';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AppStyles />
        <HomePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
