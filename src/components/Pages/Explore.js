import React from "react";
import { Link } from 'react-router-dom';
import '../../styling/Pages/Explore.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreCarousel from "../PartsOfPage/ExploreCarousel";



const Explore = () => {
    const url = "http://localhost:8090/file/download/75";
    const url2 = "http://localhost:8090/file/download/81";


    return (
        <>
            <Link to={{pathname: '/videos', state: {category: "trending"}}} className="explore-link">Trending</Link>
            <Link to={{pathname: '/videos', state: {category: "news"}}} className="explore-link">News</Link>
            <Link to={{pathname: '/videos', state: {category: "sports"}}} className="explore-link">Sports</Link>
            <Link to={{pathname: '/videos', state: {category: "entertainment"}}} className="explore-link">Entertainment</Link>
            <Link to={{pathname: '/videos', state: {category: "music"}}} className="explore-link">Music</Link>
            <Link to={{pathname: '/videos', state: {category: "traveling"}}} className="explore-link">Traveling</Link>
            <Link to={{pathname: '/videos', state: {category: "fitness"}}} className="explore-link">Fitness</Link>
            <Link to={{pathname: '/videos', state: {category: "videogames"}}} className="explore-link">Video Games</Link>
            <br />
            <hr />

            <p><strong>You might also be interested in...</strong></p>

            <ExploreCarousel show={3}>
                <video controlsList="nofullscreen nodownload" className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video controlsList="nofullscreen nodownload" className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url2} type="video/mp4"></source>
                </video>
                <video controlsList="nofullscreen nodownload" className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video controlsList="nofullscreen nodownload" className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url2} type="video/mp4"></source>
                </video>
                <video controlsList="nofullscreen nodownload" className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video controlsList="nofullscreen nodownload" className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video controlsList="nofullscreen nodownload" className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
            </ExploreCarousel>

        </>
    );
}

export default Explore;

