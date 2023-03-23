import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Home.css";

function NavTabs() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="nav nav-tabs">
      <li className="nav-item bar">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
                <NavLink
                    to="planets"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Planets
                </NavLink>
            </li>
      <li className="nav-item bar">
        <NavLink
          to="stars"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Stars
        </NavLink>
      </li>
      <li className="nav-item  bar">
        <NavLink
          to="moon"
          end
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Moon Phases
        </NavLink>
      </li>
    </ul>
    </nav>
  );
}

export default NavTabs;


{/* <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="stars"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Stars
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="moon"
          end
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Moon Phases
        </NavLink>
      </li>
    </ul> */}