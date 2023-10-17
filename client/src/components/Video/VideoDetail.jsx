import React from 'react'
import ReactPlayer from 'react-player'
import stayled from './VideoDetail.module.scss'

export default function VideoDetail({ video }) {
  return (
    <>
      <ReactPlayer
        url={video.url}
        playing={true}
        controls
        width='75%'
        height='auto'
      />
      <h1 className={stayled.title}> {video.title} </h1>
      <img src={video.avatar} alt="" className={stayled.avatar} />
      <p> {video.author}</p>
      <p>{video.reproductions} · {video.data} </p>
    </>
  )
}
