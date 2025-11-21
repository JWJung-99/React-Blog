import { ThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme } from './styles/Theme';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  console.log(setDarkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
