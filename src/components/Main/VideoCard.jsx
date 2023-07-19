import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export const Video = (props) => {
  return (
    <div>
      <h1>My title is{props.title}</h1>
      <video width="320" height="240" controls>
        <source src="Users/juani/code/tickets-app/video.mov" type="video/mp4" />
      </video>
    </div>
  );
};
