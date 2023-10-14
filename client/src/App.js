import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContextProvider, { useAuthContext } from './context/authContext'
import VideoContextProvider, { useVideoContext } from './context/videoContext'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import CreateVideo from './pages/CreateVideo'
import EditVideo from './pages/EditVideo'

function App () {
  const { handleLogin, handleEmailChange, handlePasswordChange, handleRegister } = useAuthContext()
  const { createVideo, editVideo } = useVideoContext()

  return (
    <Router>
      <AuthContextProvider value={{ handleLogin, handleEmailChange, handlePasswordChange, handleRegister }}>
      <VideoContextProvider value={{ createVideo, editVideo }}>
        <Navbar/>
        <div style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path='/video/:id' element={ <VideoPage/> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateVideo />} />
          <Route path="/edit/:id" element={<EditVideo />} />
        </Routes>
        </div>
        <Footer/>
      </VideoContextProvider>
      </AuthContextProvider>
    </Router>
  )
}

export default App
