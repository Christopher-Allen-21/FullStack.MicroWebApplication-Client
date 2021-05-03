import React from 'react';
import '../../styling/Pages/Explore.css'

const Explore = () => {
    const url = "http://localhost:8090/file/download/2_Gracie.mp4"

    return (
        <>
            <a href="url" className="explore-link"><button>Trending</button></a>
            <a href="url" className="explore-link"><button>News</button></a>
            <a href="url" className="explore-link"><button>Sports</button></a>
            <a href="url" className="explore-link"><button>Entertainment</button></a>
            <br />
            <a href="url" className="explore-link"><button>Music</button></a>
            <a href="url" className="explore-link"><button>Video Games</button></a>
            <a href="url" className="explore-link"><button>Movies</button></a>
            <a href="url" className="explore-link"><button>Tv Shows</button></a>

            <br />
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