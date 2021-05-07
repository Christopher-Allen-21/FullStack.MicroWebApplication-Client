import React from "react";
import '../../styling/Pages/Explore.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreCarousel from "../PartsOfPage/ExploreCarousel";


const Explore = () => {
    const url = "http://localhost:8090/file/download/2_Gracie.mp4";
    const url2 = "http://localhost:8090/file/download/81";


    return (
        <>
            <a href="/videos" className="explore-link"><button className="explore-button">Trending</button></a>
            <a href="/play" className="explore-link"><button className="explore-button">News</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Sports</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Entertainment</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Music</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Video Games</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Movies</button></a>
            <a href="url" className="explore-link"><button className="explore-button">TV Shows</button></a>

            <br />
            <hr />

            <p><strong>You might also be interested in...</strong></p>

            <ExploreCarousel show={3}>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url2} type="video/mp4"></source>
                </video>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url2} type="video/mp4"></source>
                </video>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
            </ExploreCarousel>

        </>
    );
}

export default Explore;

