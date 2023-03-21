import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
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
            <li className="nav-item">
                <NavLink
                    to="stars"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Stars
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="moon"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Moon Phases
                </NavLink>
            </li>
        </ul>
    );
}

export default NavTabs;