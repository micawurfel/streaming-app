import React from 'react'
import VideoList from '../components/Main/VideoList'
import Aside from '../components/Layout/Aside'
import { useVideoContext } from '../context/videoContext'

export default function HomePage() {
  const { videos } = useVideoContext()

  return (
    <>
      <section>
        <Aside />
        <VideoList videos={videos} />
      </section>
    </>
  )
}
