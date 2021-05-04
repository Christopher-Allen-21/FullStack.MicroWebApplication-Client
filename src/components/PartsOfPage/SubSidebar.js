import React from 'react';
import '../../styling/PartsOfPage/SubSidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SubSidebar = () => {
    return (
        <div className="side-bar-container">
            <p id="subscription-title">Subscriptions</p>
            <hr id="sub-sidebar-hr"/>
            <a href="/subscriptions" className="side-bar-link">Subscription 1</a>
            <a href="/subscriptions" className="side-bar-link">Subscription 2</a>
            <a href="/subscriptions" className="side-bar-link">Subscription 3</a>
            <a href="/subscriptions" className="side-bar-link">Subscription 4</a>
            <a href="/subscriptions" className="side-bar-link">Subscription 5</a>
            <a href="/subscriptions" className="side-bar-link">Subscription 6</a>
        </div>

        // <>
        //     <Nav className="side-bar-container" defaultActiveKey="/home" className="flex-column">
        //         <p id="subscription-title"><strong>Subscriptions</strong></p>
        //         <Nav.Link href="/home">Subscription 1</Nav.Link>
        //         <Nav.Link href="/home">Subscription 2</Nav.Link>
        //         <Nav.Link href="/home">Subscription 3</Nav.Link>
        //         <Nav.Link href="/home">Subscription 4</Nav.Link>
        //         <Nav.Link href="/home">Subscription 5</Nav.Link>
        //         <Nav.Link href="/home">Subscription 6</Nav.Link>
        //     </Nav>
        //
        // </>
    );
}

export default SubSidebar;