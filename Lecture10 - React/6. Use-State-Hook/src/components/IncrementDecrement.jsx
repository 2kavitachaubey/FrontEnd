import React, { useState } from "react";

const IncrementDecrement = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1 className="text-5xl m-2">{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
        className="p-2 m-2 bg-black text-white rounded"
      >
        Increment
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
        className="p-2 m-2 bg-black text-white rounded"
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setNum(num + 5);
        }}
        className="p-2 m-2 bg-black text-white rounded"
      >
        Jumb by 5
      </button>
    </div>
  );
};

export default IncrementDecrement;
