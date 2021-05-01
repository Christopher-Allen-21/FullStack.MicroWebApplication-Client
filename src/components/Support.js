import React from 'react';
import '../styling/Support.css'

const Support = () => {
    return (
        <div>
            <h1 id="zip-tube-title">ZipTube Support</h1>
            <SideBar />
        </div>
    );
}

class SideBar extends React.Component{
    render(){
        return(
            <ul className="side-bar">
                <li id="subscription-title">Subscriptions</li>
                <li className="side-bar-item">Subscription 1</li>
                <li className="side-bar-item">Subscription 2</li>
                <li className="side-bar-item">Subscription 3</li>
                <li className="side-bar-item">Subscription 4</li>
                <li className="side-bar-item">Subscription 5</li>
                <li className="side-bar-item">Subscription 6</li>
            </ul>
        )
    }
}


export default Support;