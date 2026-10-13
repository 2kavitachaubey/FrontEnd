import React from "react";
import { Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div className="center-text">
      <h1>Explore Our Courses</h1>
      <Outlet />
    </div>
  );
};

export default Courses;
