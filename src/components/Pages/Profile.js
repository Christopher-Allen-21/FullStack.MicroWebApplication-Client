// src/views/profile.js

import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";

function emailVerified(email_verified) {
    if (email_verified === true) {
        return "Yes";
    } else {
        return "No";
    }
}

const Profile = () => {
    const { user } = useAuth0();
    const { name, picture, email, nickname, email_verified } = user;

    return (
        <div>
            <div className="row align-items-center profile-header">
                <div className="col-md-2 mb-3">
                    <img
                        src={picture}
                        alt="Profile"
                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                </div>
                <div className="col-md text-center text-md-left">
                    <h2>{nickname}</h2>
                    <p className="lead text-muted">{email}</p>
                </div>
            </div>
            <br/>
            <div className="row">
        {/*<pre className="col-11 text-dark bg-light p-5">*/}
            {/*{JSON.stringify(user, null, 2)}*/}
            <Card bg="light" style={{ width: '75%', fontSize:20 }} >
                <Card.Body>
                    <strong>Name:</strong> {nickname}<br/>
                    <strong>Username:</strong> {name}<br/>
                    <strong>Email:</strong> {email} <br/>
                    <strong>Email Verified:</strong> {emailVerified(email_verified)}<br/>
                    <strong>User Last Updated: </strong>{user.updated_at.substring(0, 10)}<br/>
                </Card.Body>
            </Card>
        {/*</pre>*/}
            </div>
        </div>
    );
};

export default Profile;
