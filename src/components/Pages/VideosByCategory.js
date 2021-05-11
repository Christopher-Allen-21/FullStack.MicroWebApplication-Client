import React from "react";
import '../../styling/Pages/VideosByCategory.css';
import {Link} from "react-router-dom";

//import VideoThumbnail from 'react-video-thumbnail'; // use npm published version


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
        fetch(`http://localhost:8090/video/${category}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
                <>
                    {items.map(video => (
                        <div className="video-list-container" key={video.videoId}>
                            <strong>Video ID:</strong> {video.videoId}<br />
                            <Link to={{pathname: '/play', state: {videoId: video.videoId}}}>
                                <video controlsList="nofullscreen nodownload" className="video-list-video" src={`http://localhost:8090/file/download/${video.videoId}`} type="video/mp4" controls muted></video>
                                {/*Creates a thumbnail of the video at the 1 second mark, but it messes up the formatting on the rest of the page*/}
                                {/*<VideoThumbnail className="video-list-video"*/}
                                {/*    videoUrl={`http://localhost:8090/file/download/${video.videoId}`}*/}
                                {/*    thumbnailHandler={(thumbnail) => console.log(thumbnail)}*/}
                                {/*    snapshotAtTime={1}*/}
                                {/*    width={240}*/}
                                {/*    height={160}*/}
                                {/*/>*/}
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