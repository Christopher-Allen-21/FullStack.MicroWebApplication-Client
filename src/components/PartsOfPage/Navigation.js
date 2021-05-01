import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        // <ul>
        //     <li><NavLink to="/">Home</NavLink></li>
        //     <li><NavLink to="/explore">Explore</NavLink></li>
        //     <li><NavLink to="/upload">Upload</NavLink></li>
        //     <li><NavLink to="/subscriptions">Subscriptions</NavLink></li>
        //     <li><NavLink to="/history">History</NavLink></li>
        //     <li><NavLink to="/support">Support</NavLink></li>
        // </ul>

        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/explore">Explore</NavLink>
            <NavLink to="/upload">Upload</NavLink>
            <NavLink to="/subscriptions">Subscriptions</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/support">Support</NavLink>
        </div>
    );
}

export default Navigation;