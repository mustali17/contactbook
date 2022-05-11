import React from "react";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Contact Book
          </a>
          <div>
            <a className="btn btn-light ml-auto">Create Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
