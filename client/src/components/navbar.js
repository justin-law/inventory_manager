// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import "./navbar.css"

// Here, we display our Navbar
const Navbar = () => {
  return (
    <div className="navbar-main">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor":"rgb(50, 50, 50)"}}>
        <NavLink className="navbar-brand" to="/">
          Inventory Manager - Justin Law
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ color: 'black', backgroundColor: 'rgb(245, 188, 0)'}} exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ color: 'black', backgroundColor: 'rgb(245, 188, 0)'}} to="/inflow/create">
                New Item In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ color: 'black', backgroundColor: 'rgb(245, 188, 0)'}} to="/outflow/create">
                New Item Out
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ color: 'black', backgroundColor: 'rgb(245, 188, 0)'}} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ color: 'black', backgroundColor: 'rgb(245, 188, 0)'}} to="/contact">
                Contact Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{ color: 'black', backgroundColor: 'rgb(245, 188, 0)'}} to="/search">
                Search
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;