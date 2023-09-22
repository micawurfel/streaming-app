import React, { useEffect, useState } from 'react'
import Title from '../components/Main/Title'
import VideoList from '../components/Main/VideoList'
import { ApiService } from '../services/ApiService'
import Buttons from '../components/Auth/Buttons'

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
      <div className='row'>
        <div className='col '>
          <Title title="Navbar"></Title>
          <Buttons />
        </div>
      </div>

      <div className='row'>
        <div className='col-0 col-sm-2'>
          <Title title="Sidebar"></Title>
        </div>
        <div className='col'>
          <div className='row'>
            <Title title="TITULO"></Title>
          </div>
          <div className='row'>
            <VideoList videos={videos} />
          </div>
        </div>
      </div>
    </>
  )
}
