import React from "react";
import { useParams } from "react-router-dom";

const RandomClass = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <div className="flex justify-center px-6 py-16">
        <h1 className="text-center text-4xl font-bold text-slate-900">
          {params.id} Dynamic Route
        </h1>
      </div>
    </div>
  );
};

export default RandomClass;
