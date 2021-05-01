import React from 'react';
import '../../styling/PartsOfPage/SubSidebar.css'

const SubSidebar = () => {
    return (
        <ul className="side-bar">
            <li id="subscription-title">Subscriptions</li>
            <li className="side-bar-item">Subscription 1</li>
            <li className="side-bar-item">Subscription 2</li>
            <li className="side-bar-item">Subscription 3</li>
            <li className="side-bar-item">Subscription 4</li>
            <li className="side-bar-item">Subscription 5</li>
            <li className="side-bar-item">Subscription 6</li>
        </ul>
    );
}

export default SubSidebar;