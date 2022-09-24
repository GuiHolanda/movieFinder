import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/custom.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  return (
    <nav className={`header navbar bg-dark`}>
      <ul className="container-fluid">
        <li>
          <Link to="/">
            {' '}
            <a
              href="#"
              className="d-flex navbar-brand align-items-center text-light"
            >
              <i className="bi bi-film fs-1 me-4"></i>
              <h2 className=" fw-light fst-italic">Movie Finder App</h2>
            </a>
          </Link>
        </li>
        <li>
          <Link to="/Favorites">
            {' '}
            <button type="button" className="btn btn-dark m-0">
              <i className="bi bi-person-circle fs-2"></i>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
