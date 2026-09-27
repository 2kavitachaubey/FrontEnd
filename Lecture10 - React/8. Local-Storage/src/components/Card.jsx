import React from "react";

const Card = (props) => {
  return (
    <div
      key={props.idx}
      className="flex flex-col items-center text-center gap-1 w-64 p-6 rounded-2xl shadow-xl bg-white hover:-translate-y-1 transition-transform"
    >
      <img
        src={props.elem.imageURL}
        alt=""
        className="w-24 h-24 rounded-full object-cover ring-4 ring-emerald-500 mb-2"
      />
      <h1 className="text-xl font-bold text-black">{props.elem.name}</h1>
      <h5 className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
        {props.elem.role}
      </h5>
      <p className="text-sm text-gray-500 mt-1">{props.elem.description}</p>
      <button
        onClick={() => {
          props.deleteUser(props.idx);
        }}
        className="mt-4 px-4 py-1.5 text-sm rounded-full bg-red-600 text-white hover:bg-red-700 active:scale-95 transition-transform cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
