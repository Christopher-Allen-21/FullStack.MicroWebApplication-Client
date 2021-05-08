import React from 'react';
import '../../styling/Pages/Home.css'
import {Link} from "react-router-dom";

class Home extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        error: null,
                        isLoaded: false,
                        items: []
                };
        }

        componentDidMount() {
                fetch("http://localhost:8090/video/")
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
                                        <div className="home-container" key={video.videoId}>
                                                <strong>Video ID:</strong> {video.videoId}<br />
                                                <Link to={{pathname: '/play', state: {videoId: video.videoId}}}>
                                                        <video className="video-list-video" src={`http://localhost:8090/file/download/${video.videoId}`} type="video/mp4" controls muted></video>
                                                </Link>
                                                <br />
                                                <h1 id="home-title">{video.title}</h1>
                                                <p className="home-paragraph">
                                                        {video.likeCount} Likes {video.dislikeCount} Dislikes<br />
                                                        {video.viewCount} views - Posted on {video.videoPostedDate.substr(0,10)}<br />
                                                        <strong>Description:</strong><br />
                                                        <span className="home-description">{video.description}</span><br />
                                                        <strong>Category: </strong>{video.category}
                                                </p>
                                        </div>
                                    ))}
                            </>
                        );
                }
        }
}

export default Home;
