import React from "react";
import {Accordion, ListGroup, Table} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


class CommentsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    // CREATES A CARD FOR EACH COMMENT ON THE VIDEO
    renderCommentCard = () => {
        return (
        this.props.comments.map( (comments) => (
            <>
                <Card.Body>
                    <Card.Header>
                        <strong>{comments.postedBy}</strong>
                        <span className="posted-date"> &nbsp; Posted: {comments.datePosted.substr(0,10)}</span>
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
        return (
            <>
                <strong>Comments:</strong>
                <br/>

                {/* DISPLAY COMMENTS */}
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Show Comments
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <>{this.renderCommentCard()}</>
                        </Accordion.Collapse>
                    </Card>

                    {/* ADD COMMENTS */}
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