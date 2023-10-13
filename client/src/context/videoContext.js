import React, { createContext, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const VideoContext = createContext({})

export const useVideoContext = () => useContext(VideoContext)

export default function VideoContextProvider({ children }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  async function createVideo(e) {
    e.preventDefault()
    const data = new FormData()
    data.set('title', title)
    data.set('description', description)
    data.set('author', author)
    data.set('url', url)

    try {
      const URL = 'http://localhost:3001/video/create'
      const config = {
        method: 'POST',
        body: data
      }
      const response = await fetch(URL, config)
      if (response.ok) navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  async function editVideo(e) {
    e.preventDefault()
    const data = new FormData()
    data.set('title', title)
    data.set('description', description)
    data.set('author', author)
    data.set('url', url)
    try {
      const URL = `http://localhost:3001/video/${id}`
      const config = {
        method: 'PUT',
        body: data,
        credential: 'include'
      }
      const response = await fetch(URL, config)
      if (response.ok) navigate(`/video/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  function handleTitleChange(e) {
    setTitle(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleAuthorChange(e) {
    setAuthor(e.target.value)
  }

  function handleUrlChange(e) {
    setUrl(e.target.value)
  }

  return (
    <VideoContext.Provider value={{ createVideo, editVideo, handleTitleChange, handleDescriptionChange, handleAuthorChange, handleUrlChange }}>
      {children}
    </VideoContext.Provider>
  )
}
