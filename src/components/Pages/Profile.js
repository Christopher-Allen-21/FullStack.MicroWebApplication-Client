// src/views/profile.js

import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {Accordion, ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function emailVerified(email_verified) {
    if (email_verified === true) {
        return "Yes";
    } else {
        return "No";
    }
}

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        const {user} = this.props.auth0;
        const {name} = user;
        fetch(`http://localhost:8090/video/getComment/user/${name}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // CREATES A CARD FOR EACH COMMENT ON THE VIDEO
    renderCommentCard = () => {
        return (
            this.state.items.map((comments) => (
                    <>
                        <Card.Body>
                            <Card.Header>
                                <strong>{comments.postedBy}</strong>
                                <span className="posted-date">
                                    &nbsp; <strong>Posted:</strong> {comments.datePosted.substr(0, 10)}
                                    &nbsp; <strong>Video Id:</strong> {comments.commentVideoId | 0}
                                </span>
                            </Card.Header>
                            <ListGroup>
                                <ListGroup.Item>
                                    {comments.commentText}
                                    <br/><br/>

                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </>
                )
            )
        )
    }

    render() {
        const {user} = this.props.auth0;
        const {name, picture, email, nickname, email_verified} = user;
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
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
                        <Card bg="light" style={{width: '75%', fontSize: 20}}>
                            <Card.Body>
                                <strong>Name:</strong> {nickname}<br/>
                                <strong>Username:</strong> {name}<br/>
                                <strong>Email:</strong> {email} <br/>
                                <strong>Email Verified:</strong> {emailVerified(email_verified)}<br/>
                                <strong>User Last Updated: </strong>{user.updated_at.substring(0, 10)}<br/>
                                <strong>Comments Posted by User: </strong>
                                {/* DISPLAY COMMENTS */}
                                <Accordion>
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                Show Comments ({this.state.items.length})
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <>{this.renderCommentCard()}</>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Card>
                        <p/>

                    </div>
                </div>
            );
        }
    };
}

export default withAuth0(Profile);
