import React from "react";
import {Accordion, ListGroup, Table} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {/* COMMENTS SECTION */}
                <strong>Comments:</strong>
                <br/>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Show Comments ({this.props.videoId})
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Card.Header>Posted By: </Card.Header>
                                    <ListGroup>
                                        <ListGroup.Item>
                                            {this.props.comments[0]}
                                        </ListGroup.Item>
                                    </ListGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                Add a Comment
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                User will be able to add comments here (hopefully).
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </>
        )
    }
}

export default CommentsSection;