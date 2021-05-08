import React from 'react';
import '../../styling/Pages/History.css'

const History = () => {
    const url = "http://localhost:8090/file/download/2_Gracie.mp4"

    return (
        <>

            <p>Your watch history: </p>
            <div>
            <video className="history-video" controls muted>
                <source src={url} type="video/mp4"></source>
            </video>
            <text>"Description 1"</text>
            </div>

            <div>
                <video className="history-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <text>"Description 2"</text>
            </div>


            <div>
                <video className="history-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <text>"Description 3"</text>
            </div>


            <div>
                <video className="history-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <text>"Description 4"</text>
            </div>


            <div>
                <video className="history-video" controls muted>
                    <source src={url} type="video/mp4"></source>
                </video>
                <text>"Description 5"</text>
            </div>
        </>
    );
}

export default History;
