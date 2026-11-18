import React, { useContext } from "react";
import { ThemeChangeFunciton } from "../context/ThemeChange";

const Section = () => {
  let [theme, setTheme] = useContext(ThemeChangeFunciton);
  return (
    <div>
      <h5>Hello</h5>
    </div>
  );
};

export default Section;
