import React from "react";
import {Accordion, ListGroup} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class CommentsSection extends React.Component {

    state = {
        displayName: null,
        commentBox: null,
        latestComment: null
    }

    // HANDLE STATE CHANGES
    onDisplayNameChange = (event) => {
        this.setState( {displayName: event.target.value } )
    }

    onCommentBoxChange = (event) => {
        this.setState( {commentBox: event.target.value} )
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

    // DISABLE POST COMMENT BUTTON LOGIC
    disablePostCommentButton = () => {
        if (this.state.displayName == null || this.state.commentBox == null) {
            return true;
        }
    }

    // ON CLICKING POST COMMENT BUTTON....
    onClickPostComment = (event) => {
        let videoId = this.props.videoId;
        let displayName = this.state.displayName;
        let commentText = this.state.commentBox;
        let today = new Date().toISOString().slice(0, 10);
        fetch(`http://localhost:8090/video/addComment/${videoId}`, {
            method: "PATCH",
            body: JSON.stringify({ postedBy: displayName, commentText: commentText, datePosted: today } ),
            headers: {"Content-type" : "application/json"}
        })
        .then( response => response.json() )    // parse body test as JSON
        .then( result => {
            this.setState( {
                latestComment: result.comment
            });
        })

        window.location.reload(false);
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
                                Show Comments ({this.props.comments.length})
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
                                <Form>
                                    {/* ENTER DISPLAY NAME */}
                                    <Form.Group controlId = "commentForm.Name">
                                        <Form.Label>Display Name</Form.Label>
                                        <Form.Control placeholder="Display Name" maxLength="30" onChange={this.onDisplayNameChange}/>
                                    </Form.Group>
                                    {/* ENTER COMMENT */}
                                    <Form.Group controlId = "commentForm.Comment">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" maxLength="255" rows={3} placeholder="Comment..." onChange={this.onCommentBoxChange}/>
                                    </Form.Group>
                                </Form>
                                {/* SUBMIT COMMENT BUTTON */}
                                <Button variant="primary" type="submit" disabled={this.disablePostCommentButton()} onClick={this.onClickPostComment}>
                                    Post Comment
                                </Button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </>
        )
    }
}

export default CommentsSection;
