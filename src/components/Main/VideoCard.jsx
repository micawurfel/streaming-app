import React from "react";
import "./videoCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VideoTitle } from "./VideoTitle";
import { Thumbnail } from "./Thumbnail";



export const VideoCard = ({video}) => {

  return (
    <div className="cardVideo p-1 m-1"  key={video.id}>

        <Thumbnail thumbnail={video.thumbnail}/>
        
      <div className="infoBox d-flex flex-row justify-content-between align-items-start mt-2">

        <img src={video.avatar} alt="" className="avatar me-2 rounded-circle"/>
        <div claseName="info align-self-stretch">
          <VideoTitle  title={video.title}/> 
          <p className="author fs-6"> {video.author}</p>
          <p className="description fs-6">{video.reproductions} · {video.data} </p>
        </div>

        <button className="btn rounded-circle"> <BsThreeDotsVertical/> </button>
        
      </div>

    </div>
  );
};
