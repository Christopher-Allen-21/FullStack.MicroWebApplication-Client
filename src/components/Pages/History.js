import React from 'react';
import '../../styling/Pages/History.css'
import {withAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";

class History extends React.Component {

        state = {
            error: null,
            isLoaded: false,
            items: [],
        };

    componentDidMount() {
        const {user} = this.props.auth0;
        const {name} = user;
        fetch(`https://zipbackend.herokuapp.com/video/uploadUser/${name}`)
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

    render()
    {
        const {user} = this.props.auth0;
        const {name} = user;

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        // else if (items.length === 0) {
        //     return <div>You have not uploaded any videos yet!</div>
        // }
        else {
            return (
                <>
                    <h1>Videos Uploaded by <i>{name}</i></h1>
                    {items.map(video => (
                        <div className="home-container" key={video.videoId}>
                            <strong>Video ID:</strong> {video.videoId}<br />
                            <Link to={{pathname: '/play', state: {videoId: video.videoId}}}>
                                <video controlsList="nofullscreen nodownload" className="video-list-video" src={`https://zipbackend.herokuapp.com/file/download/${video.videoId}`} type="video/mp4" controls muted></video>
                            </Link>
                            <br />
                            <h1 id="home-title">{video.title}</h1>
                            <p className="home-paragraph">
                                {video.likeCount} Likes {video.dislikeCount} Dislikes<br />
                                {video.viewCount} views - Posted on {video.videoPostedDate.substr(0,10)}<br />
                                <strong>Description:</strong><br />
                                <span className="home-description">{video.description}</span>
                                <strong>Category: </strong>{video.category}
                            </p>
                        </div>
                    ))}
                </>
            );
        }
    }
}

export default withAuth0(History);
