import React, { useEffect, useState } from 'react'
import Title from '../components/Main/Title'
import VideoList from '../components/Main/VideoList'
import { ApiService } from '../services/ApiService'
import Aside from '../components/Layout/Aside'

export default function HomePage() {
  const apiService = new ApiService()
  const [videos, setVideos] = useState([])
  async function getVideos() {
    const response = await apiService.getVideos()
    setVideos(response.videos)
  }
  useEffect(() => {
    getVideos()
  })

  return (
    <>
      <div>
        <div>
          <Aside />
        </div>
        <div>
          <div>
            <Title title="TITULO"></Title>
          </div>
          <div>
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    </>
  )
}
