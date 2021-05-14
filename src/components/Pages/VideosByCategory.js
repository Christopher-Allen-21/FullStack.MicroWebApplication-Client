import React from "react";
import '../../styling/Pages/VideosByCategory.css';
import {Link} from "react-router-dom";

class VideosByCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        const { category } = this.props.location.state
        fetch(`https://ziptube-theresa.herokuapp.com/video/${category}`)
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
                <>
                    {items.map(video => (
                        <div className="video-list-container" key={video.videoId}>
                            <strong>Video ID:</strong> {video.videoId}<br />
                            <Link to={{pathname: '/play', state: {videoId: video.videoId}}}>
                                <video controlsList="nofullscreen nodownload" className="video-list-video" src={`https://ziptube-theresa.herokuapp.com/file/download/${video.videoId}`} type="video/mp4" controls muted></video>
                            </Link>
                            <br />
                            <h1 id="video-list-title">{video.title}</h1>
                            <p className="video-list-paragraph">
                                {video.likeCount} Likes {video.dislikeCount} Dislikes<br />
                                {video.viewCount} views - Posted on {video.videoPostedDate.substr(0,10)}<br />
                                <strong>Description:</strong><br />
                                <span className="video-list-description">{video.description}</span>
                                <strong>Category: </strong>{video.category}
                            </p>
                        </div>
                    ))}
                </>
            );
        }
    }
}

export default VideosByCategory;
