import React from "react";

const Wash = (props) => {
  return (
    <div>
      <h1
        style={{ background: props.personColor }}
        className="text-[40px] my-5 p-10 text-white font-bold rounded"
      >
        {props.person} Washroom
      </h1>
    </div>
  );
};

export default Wash;
