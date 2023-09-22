import React from 'react'
import ReactPlayer from 'react-player'
import prueba from '../../assets/videos/video-prueba.mp4'

export default function VideoDetail ({ video }) {
  return (
    <>
      <ReactPlayer
        url={prueba}
        // url={props.url}
        playing={true}
        controls
        width='75%'
        height= 'auto'
      />
      <h1 className='h2'> {video.title} </h1>
      <img src={video.avatar} alt="" className="avatar me-2 rounded-circle"/>
      <p> {video.author}</p>
      <p>{video.reproductions} · {video.data} </p>
    </>
  )
}
