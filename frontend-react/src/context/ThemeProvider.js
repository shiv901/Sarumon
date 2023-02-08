import React, { useState } from "react";

import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const setTheme = () => {
    setIsDark((mode) => !mode);
  };

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;