/* eslint-disable sonarjs/no-duplicate-string */
import { useEffect, useState } from 'react';
import Context from '.';

function Provider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const loadStoredTheme = () => {
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme) {
      setDarkMode(storedTheme);
    }
  };

  useEffect(() => {
    loadStoredTheme();
  }, []);

  useEffect(() => {
    const variables = {
      lightMode: {
        text: 'hsl(200, 15%, 8%)',
        element: 'hsl(0, 0%, 100%)',
        background: 'hsl(0, 0%, 98%)',
        input: 'hsl(0, 0%, 52%)',
      },
      darkMode: {
        text: 'hsl(0, 0%, 100%)',
        element: 'hsl(209, 23%, 22%)',
        background: 'hsl(207, 26%, 17%)',
        input: 'hsl(0, 0%, 100%)',
      },
    };

    const getVariablesFromColorTheme = () => {
      const { style } = document.documentElement;

      Object.keys(variables.lightMode).forEach((prop) => {
        style.setProperty(`--clr-${prop}`,
          `${variables[`${darkMode ? 'dark' : 'light'}Mode`][`${prop}`]}`);
      });
    };

    getVariablesFromColorTheme();
  }, [darkMode]);

  const contextValue = { darkMode, setDarkMode };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
