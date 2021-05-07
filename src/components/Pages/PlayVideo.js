import React from "react";
import '../../styling/Pages/PlayVideo.css';

class PlayVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            video: null,
            videoId: 81
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8090/video/${this.state.videoId}`)
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
                    <video className="playVideo-video" src={`http://localhost:8090/file/download/${this.state.video.videoId}`} type="video/mp4" controls muted></video>
                    <br />
                    <h1 id="playVideo-title">{this.state.video.title}</h1>
                    <p className="playVideo-paragraph">
                        {this.state.video.likeCount} Likes {this.state.video.dislikeCount} Dislikes<br />
                        {this.state.video.viewCount} views - Posted on {this.state.video.videoPostedDate.substr(0,10)}<br />
                        <strong>Description:</strong><br />
                        <span>{this.state.video.description}</span><br />
                        <strong>Category: </strong>{this.state.video.category}
                    </p>
                </div>
            );
        }
    }
}

export default PlayVideo;