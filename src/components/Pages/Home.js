import React from 'react';
import '../../styling/Pages/Home.css'

const Home = () => {
    return (
        <div>
            <p>You are on the Home page</p>


            <iframe className="embedded-video" width="420" height="315" src="https://www.youtube.com/embed/9vwFciHiWlk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

            <iframe className="embedded-video"  width="420" height="315" src="https://www.youtube.com/embed/9vwFciHiWlk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

            <iframe className="embedded-video"  width="420" height="315" src="https://www.youtube.com/embed/9vwFciHiWlk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

        </div>
    );
}

export default Home;