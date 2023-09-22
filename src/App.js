import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import VideoDetailContainer from './pages/VideoDetailContainer'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path='/video/:id' element={ <VideoDetailContainer/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
