import React from "react";
import { Link } from 'react-router-dom';
import '../../styling/Pages/Explore.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreCarousel from "../PartsOfPage/ExploreCarousel";


const Explore = () => {
    const url = "https://zip-tube-backend.herokuapp.com//file/download/154";
    const url2 = "https://zip-tube-backend.herokuapp.com/file/download/170";


    return (
        <>
            <Link to={{pathname: '/video', state: {category: "trending"}}} className="explore-link">Trending</Link>
            <Link to={{pathname: '/video', state: {category: "news"}}} className="explore-link">News</Link>
            <Link to={{pathname: '/video', state: {category: "sports"}}} className="explore-link">Sports</Link>
            <Link to={{pathname: '/video', state: {category: "entertainment"}}} className="explore-link">Entertainment</Link>
            <Link to={{pathname: '/video', state: {category: "music"}}} className="explore-link">Music</Link>
            <Link to={{pathname: '/video', state: {category: "traveling"}}} className="explore-link">Traveling</Link>
            <Link to={{pathname: '/video', state: {category: "fitness"}}} className="explore-link">Fitness</Link>
            <Link to={{pathname: '/video', state: {category: "videogames"}}} className="explore-link">Video Games</Link>
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

