import React from 'react'
import VideoCard from './VideoCard'

export default function VideoList({ videos }) {
  return (
    <div className='d-flex flex-wrap mx-3'>
      {videos.map(video => <VideoCard key={video.id} video={video} />)}
    </div>
  )
}
