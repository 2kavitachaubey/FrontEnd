import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState();
  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    let name = `${response.data.results[0].name.first} 
        ${response.data.results[0].name.last}`;
    setUserName(name);
  };

  useEffect(() => {
    getData();
  }, [number]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <main className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Counter
        </p>

        <div className="mx-auto my-6 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30">
          <span className="text-7xl font-black tracking-tight">{number}</span>
        </div>

        <button
          className="rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:scale-105 hover:bg-cyan-100 active:scale-95"
          onClick={() => setNumber((previousNumber) => previousNumber + 1)}
        >
          Increase number
        </button>

        <p className="mt-8 text-sm text-slate-400">Random user</p>
        <h1 className="mt-1 text-xl font-semibold text-slate-100">{userName}</h1>
      </main>
    </div>
  );
};

export default App;
