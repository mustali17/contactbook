import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Contact Book
          </Link>
          <div>
            <Link to="/contacts/add" className="btn btn-primary ml-auto">
              Create Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
