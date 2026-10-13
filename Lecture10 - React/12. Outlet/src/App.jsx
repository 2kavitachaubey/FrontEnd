import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import ReactCourse from "./components/ReactCourse";
import Basics from "./components/Basics";
import Hooks from "./components/Hooks";
import Routing from "./components/Routing";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses">
          <Route index element={<Courses />} />
          <Route path="/courses/:id">
            <Route index element={<ReactCourse />} />
            <Route path="/courses/:id/basic" element={<Basics />} />
            <Route path="/courses/:id/hooks" element={<Hooks />} />
            <Route path="/courses/:id/routing" element={<Routing />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
