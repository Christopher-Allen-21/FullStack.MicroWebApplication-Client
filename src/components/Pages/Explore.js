import React from 'react';
import '../../styling/Pages/Explore.css'

const Explore = () => {
    const url = "http://localhost:8090/file/download/2_Gracie.mp4"

    return (
        <>

                <div className="explore-item"><a href="url" className="explore-link">Trending</a></div>
                <div className="explore-item"><a href="url" className="explore-link">News</a></div>
                <div className="explore-item"><a href="url" className="explore-link">Sports</a></div>
                <div className="explore-item"><a href="url" className="explore-link">Entertainment</a></div>
                <br />
                <div className="explore-item"><a href="url" className="explore-link">Music</a></div>
                <div className="explore-item"><a href="url" className="explore-link">Video Games</a></div>
                <div className="explore-item"><a href="url" className="explore-link">Movies</a></div>
                <div className="explore-item"><a href="url" className="explore-link">Tv Shows</a></div>

                <hr />
                <p>You might also be interested in: </p>
                <video className="explore-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <video className="explore-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>

        </>
    );
}

export default Explore;