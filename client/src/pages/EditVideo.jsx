import React from 'react'
import VideoForm from '../components/Video/VideoForm'
import { useVideoContext } from '../context/videoContext'

export default function EditVideo() {
  const { editVideo } = useVideoContext()
  return (
    <VideoForm event={editVideo} button='Edit' />
  )
}
