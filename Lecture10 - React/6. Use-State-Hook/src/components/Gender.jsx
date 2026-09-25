import React, { useState } from "react";
import Wash from "./Wash";

const Gender = () => {
  const [gender, setGender] = useState("Female");
  let changeGender = () => {
    return gender === "Female"
      ? setGender("Male")
      : gender === "Male"
        ? setGender("Other")
        : setGender("Female");
  };
  let genderColor = () => {
    return gender === "Female"
      ? "#db2777"
      : gender === "Male"
        ? "#60a5fa"
        : "purple";
  };
  return (
    <div className="m-10">
      <h1
        style={{
          color: genderColor(),
        }}
        className="font-bold text-[40px]"
      >
        {gender}
      </h1>
      <button
        style={{
          background: genderColor(),
        }}
        className="text-[25px] my-5 p-3 text-white font-bold rounded"
        onClick={changeGender}
      >
        Change Gender
      </button>

      <Wash person={gender} personColor={genderColor()} />
    </div>
  );
};

export default Gender;
