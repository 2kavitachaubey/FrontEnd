import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Classes from "./components/Classes";
import DsaClass from "./components/DsaClass";
import RandomClass from "./components/RandomClass";
import DetailClass from "./components/DetailClass";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route element={<><Navbar /><Outlet /></>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Nested route */}
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/dsaClass" element={<DsaClass />} />

          {/* Dynamic route */}
          <Route path="/classes/:id" element={<RandomClass />} />

          {/* Noraml route after Dynamic one */}
          <Route path="/classes/:id/detailClass" element={<DetailClass />} />
        </Route>

        {/* Not found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
