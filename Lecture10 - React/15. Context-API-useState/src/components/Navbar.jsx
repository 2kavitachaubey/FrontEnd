import React, { useContext } from "react";
import { ThemeChangeFunciton } from "../context/ThemeChange";

const Navbar = () => {
  let [theme, setTheme] = useContext(ThemeChangeFunciton);
  return (
    <div>
      <h2>this is the {theme} theme</h2>
      <button
        onClick={() => {
          theme === "Light" ? setTheme("Dark") : setTheme("Light");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Navbar;
