import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <h3>Watch Club</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {!props.auth ? (
              <>
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/movie">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tv">
                      tv show
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/pepole">
                      People
                    </Link>
                  </li>
                  
                </ul>
                
                
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Logout
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <ul className="navbar-nav mb-2 mb-lg-0 float-end">
                <li className="nav-item ">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LogIn
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
