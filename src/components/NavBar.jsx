import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

     
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/projects">Projects</NavLink>

        <NavLink to="/contact">Contact</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;