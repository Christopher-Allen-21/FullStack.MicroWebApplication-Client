import React from "react";
import '../../styling/Pages/VideoList.css';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8090/video")
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
                <ul>
                    {items.map(item => (
                        <li key={item.videoId}>
                            Video ID:{item.videoId}  Title:{item.title}  User ID:{item.userId}  Length:{item.lengthOfVideo}  View Count:{item.viewCount}  Description:{item.description}  Like Count:{item.likeCount} Dislike Count:{item.dislikeCount}  Category:{item.category}

                            <video className="videolist-video" src={`http://localhost:8090/file/download/${item.videoId}`} type="video/mp4" controls muted></video>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default VideoList;