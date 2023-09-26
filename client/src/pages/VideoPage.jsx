import React, { useState, useEffect } from 'react'
import VideoDetail from '../components/Video/VideoDetail'
import { ApiService } from '../services/ApiService'
import { useParams } from 'react-router'

export default function VideoPage() {
  const apiService = new ApiService()

  const [video, setVideo] = useState({})
  const { id } = useParams()

  async function getVideos() {
    const response = await apiService.getVideos()
    response.videos.forEach(element => {
      if (Number(id) === element.id) {
        setVideo(element)
      } else {
        console.log('el id no existe')
      }
    })
  }

  useEffect(() => {
    getVideos()
  }, [id])

  return (
    <>
      <VideoDetail video={video} />
    </>
  )
}
