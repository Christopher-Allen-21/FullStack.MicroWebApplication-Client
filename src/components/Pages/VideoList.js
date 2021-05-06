import React from "react";
import '../../styling/Pages/VideoList.css';

const VideoList = () => {
    const url = "http://localhost:8090/file/download/";
    const urlWithId = [];
    for(var i=0; i<81; i++){
        var urlPlusId = url+i;
        urlWithId.push(urlPlusId)
    }

    const allVideos = urlWithId.map((urlWithId) =>
        <video className="videolist-video" src={urlWithId} type="video/mp4" controls muted></video>
    );


    return (
        <ul>
            {allVideos}
        </ul>
    )
}



export default VideoList;