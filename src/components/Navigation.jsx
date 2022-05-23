import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Cyclea Website
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Accueil
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/actus">
                  Actualités
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ni">
                  Notes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/recrutements">
                  Recrutements
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rapports">
                  Rapports
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
