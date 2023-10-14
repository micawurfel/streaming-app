import React from 'react'
import VideoList from '../components/Porfile/VideoList'
import CreateButton from '../components/Porfile/CreateButton'

export default function Profile() {
  return (
    <>
      <div>My data</div>
      {/* change password */}
      <CreateButton />
      <VideoList />
    </>
  )
}
