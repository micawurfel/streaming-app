import React from 'react'
import { Link } from 'react-router-dom'
import styled from './VideoCard.module.scss'
import Thumbnail from './Thumbnail'

export default function VideoCard({ video }) {
  return (
    <div className={styled.cardVideo} key={video.id}>

      <Thumbnail thumbnail={video.thumbnail} />

      <div className={styled.infoBox}>

        <img src={video.avatar} alt="" className={styled.avatar} />

        <Link to={`/video/${video.id}`}>
          <div className={styled.info}>
            <h1 className={styled.title} >{video.title}</h1>
            <p className={styled.author}> {video.author}</p>
            <p className={styled.description}> {video.description} </p>
          </div>

        </Link>

      </div>

    </div >
  )
}
