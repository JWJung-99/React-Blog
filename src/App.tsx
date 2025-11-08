import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './styles/Theme';
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  console.log(setDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <h1>React Blog</h1>
    </ThemeProvider>
  );
};

export default App;
