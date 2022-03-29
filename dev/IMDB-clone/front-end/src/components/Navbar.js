import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        IMDB-clone
      </Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              movies
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Add" className="nav-link">
              Add Movies
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Actor" className="nav-link">
               Actor
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Actor/add" className="nav-link">
              Add Actor
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Actor/add" className="nav-link">
              Producers
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/Actor/add" className="nav-link">
              Add Producers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
