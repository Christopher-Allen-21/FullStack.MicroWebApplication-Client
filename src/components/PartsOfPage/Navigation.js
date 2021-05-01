import React from 'react';
import '../../styling/PartsOfPage/Navigation.css'

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/explore">Explore</NavLink></li>
            <li><NavLink to="/upload">Upload</NavLink></li>
            <li><NavLink to="/subscriptions">Subscriptions</NavLink></li>
            <li><NavLink to="/history">History</NavLink></li>
            <li><NavLink to="/support">Support</NavLink></li>
        </ul>
    );
}

export default Navigation;