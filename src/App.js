import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './components/Auth/Login'
import { Register } from './components/Auth/Register'
import HomePage from './components/Main/HomePage'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
