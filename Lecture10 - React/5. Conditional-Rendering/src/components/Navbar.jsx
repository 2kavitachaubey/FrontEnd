import React from "react";

const Navbar = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="flex justify-between items-center py-8 px-12 text-white"
    >
      <h1 className="font-bold text-[20px]">Navbar</h1>
      <ul className="flex justify-between items-center gap-5 pr-10">
        {props.list.map((elem, idx) => {
          return (
            <li key={idx} className="text-white">
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
