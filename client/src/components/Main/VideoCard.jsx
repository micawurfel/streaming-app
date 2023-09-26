import React from 'react'
import { Link } from 'react-router-dom'
import './videoCard.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import VideoTitle from './VideoTitle'
import Thumbnail from './Thumbnail'

export default function VideoCard({ video }) {
  return (
    <div className="cardVideo p-1 m-1" style={{ width: '340px', height: '350px' }} key={video.id}>

      <Thumbnail thumbnail={video.thumbnail} />

      <div className="infoBox d-flex flex-row justify-content-between align-items-start mt-2">

        <Link to={`/video/${video.id}`}>

          <img src={video.avatar} alt="" className="avatar me-2 rounded-circle" />
          <div className="info align-self-stretch">
            <VideoTitle title={video.title} />
            <p className="author fs-6"> {video.author}</p>
            <p className="description fs-6">{video.reproductions} · {video.data} </p>
          </div>

        </Link>

        <button className="btn rounded-circle"> <BsThreeDotsVertical /> </button>

      </div>

    </div>
  )
}
