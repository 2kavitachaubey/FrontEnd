import React, { useState, createContext } from "react";

export const ThemeChangeFunciton = createContext();

const ThemeChange = (props) => {
  let [theme, setTheme] = useState("Light");
  return (
    <ThemeChangeFunciton.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeChangeFunciton.Provider>
  );
};

export default ThemeChange;
