import React from 'react'
import VideoCard from './VideoCard'
import styled from './VideoList.module.scss'

export default function VideoList({ videos }) {
  return (
    <div className={styled.container}>
      {videos.map(video => <VideoCard key={video._id} video={video} />)}
    </div>
  )
}
