import React from "react";
import '../../styling/Pages/PlayVideo.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import {ToggleButtonGroup} from "react-bootstrap";
import Card from 'react-bootstrap/Card'

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

    // add button for like/dislike; button sends post request to update whichever
    // maybe send post request everytime this runs to increment view count
    componentDidMount() {
        const { videoId } = this.props.location.state
        fetch(`http://localhost:8090/video/${videoId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        video: result,
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
    }

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
                        <ButtonGroup className="like-dislike-buttons" type="checkbox" defaultValue={[1]} aria-label="like-dislike-buttons">
                            <Button variant="success" value={0} disabled={this.state.likeDisabled} onClick={this.clickLikeButton}>Like</Button>
                            <Button variant="danger" value={0} disabled={this.state.dislikeDisabled} onClick={this.clickDislikeButton}>Dislike</Button>
                        </ButtonGroup>
                        &nbsp; {this.state.video.likeCount} Likes
                        &nbsp; {this.state.video.dislikeCount} Dislikes <br/>

                        {/* PAGE VIEWS AND POSTED DATE */}
                        {this.state.video.viewCount} views - Posted on {this.state.video.videoPostedDate.substr(0,10)}<br />

                        {/* VIDEO DESCRIPTION */}
                        <strong>Description:</strong><br />
                        <Card body>{this.state.video.description}</Card><br />

                        {/* VIDEO CATEGORY */}
                        <strong>Category: </strong>{this.state.video.category}
                    </p>
                </div>
            );
        }
    }
}

export default PlayVideo;