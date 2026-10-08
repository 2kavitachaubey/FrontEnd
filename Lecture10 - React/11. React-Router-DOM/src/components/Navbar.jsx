import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-slate-900 px-8 py-5 text-white shadow-md">
      <div>
        <h1 className="text-2xl font-bold">Navbar</h1>
      </div>
      <div className="flex flex-row gap-6">
        <Link className="transition hover:text-cyan-300" to="/">Home</Link>
        <Link className="transition hover:text-cyan-300" to="/about">About</Link>
        <Link className="transition hover:text-cyan-300" to="/blogs">Blogs</Link>
        <Link className="transition hover:text-cyan-300" to="/classes">Classes</Link>
      </div>
    </div>
  );
};

export default Navbar;
