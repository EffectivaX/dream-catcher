import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        Dream Catcher
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Check Dreams
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/add-dream" className="nav-link">
              Create Dream Log
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/add-dreamer" className="nav-link">
              Add Dreamer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
