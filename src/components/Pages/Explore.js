import React from "react";
import { Link } from 'react-router-dom';
import '../../styling/Pages/Explore.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreCarousel from "../PartsOfPage/ExploreCarousel";


class Explore extends React.Component {

    state = {
        list: []
    };

    // get list of all video Ids...trying to use w/ Carousel...needs work
    componentDidMount() {
        fetch("http://localhost:8090/video/allIds")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {list: result}
                    )
                }).catch( error => {
                alert(error.message);
            }
        );
    }

    render() {
        return (
            <>
                <Link to={{pathname: 'url', state: {videoId: 83}}} className="explore-link">Trending</Link>
                <Link to={{pathname: '/videos', state: {category: "news"}}} className="explore-link">News</Link>
                <Link to={{pathname: '/videos', state: {category: "sports"}}} className="explore-link">Sports</Link>
                <Link to={{pathname: '/videos', state: {category: "entertainment"}}}
                      className="explore-link">Entertainment</Link>
                <Link to={{pathname: '/videos', state: {category: "music"}}} className="explore-link">Music</Link>
                <Link to={{pathname: '/videos', state: {category: "traveling"}}}
                      className="explore-link">Traveling</Link>
                <Link to={{pathname: '/videos', state: {category: "fitness"}}} className="explore-link">Fitness</Link>
                <Link to={{pathname: '/videos', state: {category: "videogames"}}} className="explore-link">Video
                    Games</Link>
                <br/>
                <hr/>

                <p><strong>You might also be interested in...</strong></p>
                <ExploreCarousel show={3}>
                    <video controlsList="nofullscreen nodownload" className="explore-video-carousel"
                           style={{padding: 8}} controls muted>
                        <source src={`http://localhost:8090/file/download/147`} type="video/mp4"></source>
                    </video>
                    <video controlsList="nofullscreen nodownload" className="explore-video-carousel"
                           style={{padding: 8}} controls muted>
                        <source src={`http://localhost:8090/file/download/164`} type="video/mp4"></source>
                    </video>
                    <video controlsList="nofullscreen nodownload" className="explore-video-carousel"
                           style={{padding: 8}} controls muted>
                        <source src={`http://localhost:8090/file/download/150`} type="video/mp4"></source>
                    </video>
                    <video controlsList="nofullscreen nodownload" className="explore-video-carousel"
                           style={{padding: 8}} controls muted>
                        <source src={`http://localhost:8090/file/download/172`} type="video/mp4"></source>
                    </video>
                    <video controlsList="nofullscreen nodownload" className="explore-video-carousel"
                           style={{padding: 8}} controls muted>
                        <source src={`http://localhost:8090/file/download/152`} type="video/mp4"></source>
                    </video>
                    <video controlsList="nofullscreen nodownload" className="explore-video-carousel"
                           style={{padding: 8}} controls muted>
                        <source src={`http://localhost:8090/file/download/180`} type="video/mp4"></source>
                    </video>
                    <video controlsList="nofullscreen nodownload" className="explore-video-carousel"
                           style={{padding: 8}} controls muted>
                        <source src={`http://localhost:8090/file/download/154`} type="video/mp4"></source>
                    </video>
                </ExploreCarousel>

            </>
        );
    }
}

export default Explore;

