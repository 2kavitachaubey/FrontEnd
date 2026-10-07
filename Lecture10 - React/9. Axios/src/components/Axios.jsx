import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Axios = () => {
  const [userDetails, setUserDetails] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log(response.data);
    setUserDetails(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              User Directory
            </h1>
            <p className="mt-1 text-slate-400">Fetch users from the API</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userDetails.map((elem) => {
            return (
              <div key={elem.id} className="h-full">
                <Card user={elem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Axios;
