import React, { useEffect, useState } from "react";
import '../../styling/Pages/Explore.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExploreCarousel from "../PartsOfPage/ExploreCarousel";
import Carousel from 'react-bootstrap/Carousel';


const Explore = () => {
    const url = "http://localhost:8090/file/download/2_Gracie.mp4"


    return (
        <>
            <a href="url" className="explore-link"><button className="explore-button">Trending</button></a>
            <a href="url" className="explore-link"><button className="explore-button">News</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Sports</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Entertainment</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Music</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Video Games</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Movies</button></a>
            <a href="url" className="explore-link"><button className="explore-button">Tv Shows</button></a>

            <br />
            <hr />

            <p><strong>You might also be interested in...</strong></p>

            <ExploreCarousel show={3}>
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
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
                <video className="explore-video-carousel" style={{padding: 8}} controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
            </ExploreCarousel>




            {/*<Carousel id="explore-carousel">*/}
            {/*    <Carousel.Item>*/}
            {/*        <video className="explore-video-carousel" controls muted>*/}
            {/*            <source src={url} type="video/mp4"></source>*/}
            {/*        </video>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <video className="explore-video-carousel" controls muted>*/}
            {/*            <source src={url} type="video/mp4"></source>*/}
            {/*        </video>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <video className="explore-video-carousel" controls muted>*/}
            {/*            <source src={url} type="video/mp4"></source>*/}
            {/*        </video>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <video className="explore-video-carousel" controls muted>*/}
            {/*            <source src={url} type="video/mp4"></source>*/}
            {/*        </video>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}

            {/*<video className="explore-video" controls muted>*/}
            {/*    <source src={url} type="video/mp4"></source>*/}
            {/*</video>*/}
            {/*<video className="explore-video" controls muted>*/}
            {/*    <source src={url} type="video/mp4"></source>*/}
            {/*</video>*/}
            {/*<video className="explore-video" controls muted>*/}
            {/*    <source src={url} type="video/mp4"></source>*/}
            {/*</video>*/}
            {/*<video className="explore-video" controls muted>*/}
            {/*    <source src={url} type="video/mp4"></source>*/}
            {/*</video>*/}

        </>
    );
}

export default Explore;
