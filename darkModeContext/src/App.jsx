import React, { useState } from 'react'
import ThemeContext, { themes } from './themeContext'
import './App.css'

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleThemeChange = () => {
    if (theme === themes.light) {
      setTheme(themes.light);
    }
    else {
      setTheme(themes.dark);
    };
  };

  const providerValue = useMemo(() => ({ theme, handleThemeChange }), [theme, handleThemeChange]);

  return (
    <>
     <ThemeContext.Provider value={providerValue}>
      <layout>
        <headerContext />
        <bodyContext />
      </layout>
      </ThemeContext.Provider> 
    </>
  )
};

export default App
