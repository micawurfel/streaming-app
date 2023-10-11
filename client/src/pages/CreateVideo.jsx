import React from 'react'
import VideoForm from '../components/Video/VideoForm'
import { useVideoContext } from '../context/videoContext'

export default function CreateVideo() {
  const { createVideo } = useVideoContext()

  return (
    <VideoForm event={createVideo} button='Subir' />
  )
}
