import React from "react";
import { Outlet } from "react-router-dom";

const ReactCourse = () => {
  return (
    <div className="center-text">
      <h1>Learn React</h1>
      <Outlet />
    </div>
  );
};

export default ReactCourse;
