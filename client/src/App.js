import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import AuthContextProvider, { useAuthContext } from './context/authContext'

function App () {
  const { handleLogin, handleEmailChange, handlePasswordChange, handleRegister } = useAuthContext()

  return (
    <Router>
      <AuthContextProvider value={{ handleLogin, handleEmailChange, handlePasswordChange, handleRegister }}>
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path='/video/:id' element={ <VideoPage/> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}

export default App
