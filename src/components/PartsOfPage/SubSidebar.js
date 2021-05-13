import React from 'react';
import '../../styling/PartsOfPage/SubSidebar.css'
import { Link } from 'react-router-dom';

const SubSidebar = () => {
    return (
        <div className="side-bar-container">
            <p id="subscription-title">Categories</p>
            <hr id="sub-sidebar-hr"/>
            <Link to={{pathname: '/video', state: {category: "trending"}}} className="side-bar-link">Trending</Link>
            <Link to={{pathname: '/video', state: {category: "news"}}} className="side-bar-link">News</Link>
            <Link to={{pathname: '/video', state: {category: "sports"}}} className="side-bar-link">Sports</Link>
            <Link to={{pathname: '/video', state: {category: "entertainment"}}} className="side-bar-link">Entertainment</Link>
            <Link to={{pathname: '/video', state: {category: "music"}}} className="side-bar-link">Music</Link>
            <Link to={{pathname: '/video', state: {category: "traveling"}}} className="side-bar-link">Traveling</Link>
            <Link to={{pathname: '/video', state: {category: "fitness"}}} className="side-bar-link">Fitness</Link>
            <Link to={{pathname: '/video', state: {category: "videogames"}}} className="side-bar-link">Video Games</Link>
        </div>
    );
}

export default SubSidebar;