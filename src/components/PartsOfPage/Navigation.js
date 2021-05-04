import React from 'react';
import '../../styling/PartsOfPage/Navigation.css'

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul className="nav-bar-container">
            <li className="nav-bar-item"><NavLink to="/">Home</NavLink></li>
            <li className="nav-bar-item"><NavLink to="/explore">Explore</NavLink></li>
            <li className="nav-bar-item"><NavLink to="/upload">Upload</NavLink></li>
            <li className="nav-bar-item"><NavLink to="/subscriptions">Subscriptions</NavLink></li>
            <li className="nav-bar-item"><NavLink to="/history">History</NavLink></li>
            <li className="nav-bar-item"><NavLink to="/support">Support</NavLink></li>
            <li className="nav-bar-item"><input id="search" type="text" placeholder="Search..."/></li>
        </ul>
    );
}

export default Navigation;