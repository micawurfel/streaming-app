import React from 'react'
import { Link } from 'react-router-dom'
// import './videoCard.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import VideoTitle from './VideoTitle'
import Thumbnail from './Thumbnail'

export default function VideoCard({ video }) {
  return (
    <div className="cardVideo" style={{ width: '340px', height: '350px' }} key={video.id}>

      <Thumbnail thumbnail={video.thumbnail} />

      <div className="infoBox">

        <Link to={`/video/${video.id}`}>

          <img src={video.avatar} alt="" className="avatar" />
          <div className="info">
            <VideoTitle title={video.title} />
            <p className="author"> {video.author}</p>
            <p className="description">{video.reproductions} · {video.data} </p>
          </div>

        </Link>

        <button className="btn"> <BsThreeDotsVertical /> </button>

      </div>

    </div>
  )
}
