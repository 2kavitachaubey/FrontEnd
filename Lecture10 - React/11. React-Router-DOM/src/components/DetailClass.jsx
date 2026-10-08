import React from "react";
import { useParams } from "react-router-dom";

const DetailClass = () => {
  const params = useParams();
  return (
    <div>
      <div>
        <div className="flex justify-center px-6 py-16">
          <h1 className="text-center text-4xl font-bold text-slate-900">
            {params.id}, I can use params because my parent was a dynamic route.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DetailClass;
