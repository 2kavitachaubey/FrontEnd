import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Courses from "./Courses";

const Routing = () => {
  const param = useParams();
  console.log(param);

  const navigate = useNavigate();
  return (
    <div className="center-text">
      <h1>Routing in Courses</h1>
      <button
        onClick={() => {
          navigate("/courses");
        }}
      >
        Go to Courses
      </button>
    </div>
  );
};

export default Routing;
