import React, { useState } from "react";
import FormData from "./components/FormData";

const App = () => {
  const [theme, setTheme] = useState("Light");
  const changeTheme = (newtheme) => {
    setTheme(newtheme.toLowerCase());
  };
  return (
    <div className={`bg-color ${theme === "dark" ? "dark" : "light"}`}>
      <h1 className={`heading ${theme === "dark" ? "cdark" : "clight"}`}>
        The Theme is {theme}
      </h1>
      <FormData theme={theme} changeTheme={changeTheme} />
    </div>
  );
};

export default App;
