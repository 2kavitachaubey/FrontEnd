import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <h1 className="navbar-title">Navbar</h1>
      <div className="navbar-links">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/courses"
        >
          Courses
        </NavLink>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
