import React from 'react'
import VideoList from '../components/Porfile/VideoList'
import CreateButton from '../components/Porfile/CreateButton'
import { useVideoContext } from '../context/videoContext'

export default function Profile() {
  const { videos } = useVideoContext()

  return (
    <>
      <div>My data</div>
      {/* change password */}
      <CreateButton />
      <VideoList videos={videos} />
    </>
  )
}
