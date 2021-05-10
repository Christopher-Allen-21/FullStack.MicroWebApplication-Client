import React from "react";
import '../../styling/Pages/PlayVideo.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {Accordion, Badge, ToggleButtonGroup} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import CommentsSection from "./CommentsSection";

class PlayVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            video: null,

            // Like & Dislike Buttons
            likeClicks: 0,
            dislikeClicks: 0,
            likeDisabled: false,
            dislikeDisable: false
        };
    }

    // LOAD THE VIDEO
    componentDidMount() {
        const { videoId } = this.props.location.state
        fetch(`http://localhost:8090/video/${videoId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        video: result,
                        comments: result.comments
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        fetch(`http://localhost:8090/video/incrementViewCount/${videoId}`,
            {method: "PATCH"})
            .then( response => response.json() )    // parse body test as JSON
            .then( result => {
                this.setState( {
                    video: result
                })
            })
    }

    // ON CLICK OF LIKE BUTTON
    clickLikeButton = () => {
        // FIRST CLICK OF LIKE BUTTON
        if (this.state.likeClicks === 0) {
            this.changeLikes("plus")
            this.setState( {likeClicks: 1, dislikeDisabled: true, likeDisabled: false} ); // CANNOT DISLIKE IF LIKED
            // SECOND CLICK OF LIKE BUTTON
        } else {
            this.changeLikes("minus");
            this.setState( {likeClicks: 0, dislikeDisabled: false, likeDisabled: false} ); // IF UNLIKED, REVERT BACK TO ORIGINAL STATE
        }
    }

    // ON CLICK OF DISLIKE BUTTON
    clickDislikeButton = () => {
        // FIRST CLICK OF DISLIKE BUTTON
        if (this.state.dislikeClicks === 0) {
            this.changeDislikes("plus")
            this.setState( {dislikeClicks: 1, dislikeDisabled: false, likeDisabled: true} ); // CANNOT LIKE IF DISLIKED
            // SECOND CLICK OF DISLIKE BUTTON
        } else {
            this.changeDislikes("minus");
            this.setState( {dislikeClicks: 0, dislikeDisabled: false, likeDisabled: false} ); // IF UN-DISLIKED, REVERT BACK TO ORIGINAL STATE
        }
    }

    // INCREMENT/DECREMENT LIKE COUNT BY 1 ON SERVER
    changeLikes = (plusOrMinus) => {
        const { videoId } = this.props.location.state;
        fetch(`http://localhost:8090/video/like/${plusOrMinus}/${videoId}`,
            {method: "PATCH"})
            .then( response => response.json() )    // parse body test as JSON
            .then( result => {
                this.setState( {
                    video: result
                })
            })
    }

    // INCREMENT/DECREMENT DISLIKE COUNT BY 1 ON SERVER
    changeDislikes = (plusOrMinus) => {
        const { videoId } = this.props.location.state;
        fetch(`http://localhost:8090/video/dislike/${plusOrMinus}/${videoId}`,
            {method: "PATCH"})
            .then( response => response.json() )    // parse body test as JSON
            .then( result => {
                this.setState( {
                    video: result
                })
            })
    }


    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="playVideo-container">

                    {/* VIDEO */}
                    <video className="playVideo-video" src={`http://localhost:8090/file/download/${this.state.video.videoId}`} type="video/mp4" controls muted></video>
                    <br />

                    {/* VIDEO TITLE */}
                    <h1 id="playVideo-title">{this.state.video.title}</h1>

                    <p className="playVideo-paragraph">

                        {/* LIKE AND DISLIKE BUTTONS */}
                        <ButtonGroup className="like-dislike-buttons" type="checkbox" aria-label="like-dislike-buttons">
                            <Button variant="success" disabled={this.state.likeDisabled} onClick={this.clickLikeButton}>
                                Like <Badge variant="light">{this.state.video.likeCount}</Badge>
                            </Button>
                            <Button variant="danger" disabled={this.state.dislikeDisabled} onClick={this.clickDislikeButton}>
                                Dislike <Badge variant="light">{this.state.video.dislikeCount}</Badge>
                            </Button>
                        </ButtonGroup>
                        &nbsp; {this.state.video.viewCount} Views
                        <br /><br />

                        {/* VIDEO DESCRIPTION */}
                        <strong>Description:</strong><br />
                        <Card body>{this.state.video.description}</Card>
                        <br />

                        {/* VIDEO DETAILS */}
                        <p className="posted-date">
                            <strong>Posted:</strong> {this.state.video.videoPostedDate.substr(0,10)} <br/>
                            <strong>Category:</strong> {this.state.video.category} <br/>
                        </p>

                        {/* COMMENTS SECTION */}
                        <CommentsSection comments={this.state.video.comments} videoId={this.state.video.videoId}/>
                    </p>
                </div>
            );
        }
    }
}

export default PlayVideo;