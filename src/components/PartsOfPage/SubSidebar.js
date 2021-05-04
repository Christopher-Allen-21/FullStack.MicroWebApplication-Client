import React from 'react';
import '../../styling/PartsOfPage/SubSidebar.css'

const SubSidebar = () => {
    return (
        <div className="side-bar-container">
            <p id="subscription-title">Subscriptions</p>
            <hr />
            <a href="url" className="side-bar-link">Subscription 1</a>
            <a href="url" className="side-bar-link">Subscription 2</a>
            <a href="url" className="side-bar-link">Subscription 3</a>
            <a href="url" className="side-bar-link">Subscription 4</a>
            <a href="url" className="side-bar-link">Subscription 5</a>
            <a href="url" className="side-bar-link">Subscription 6</a>
        </div>
    );
}

export default SubSidebar;