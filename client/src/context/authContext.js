import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userInfo, setUserInfo] = useState({})

  const navigate = useNavigate()

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const URL = 'http://localhost:3001/login'
      const config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      }

      // const response = axios.post(URL, config)
      const response = await fetch(URL, config)

      if (response.ok) {
        const userData = await response.json()
        setUserInfo(userData)
        navigate('/profile')
      } else {
        console.log('Wrong credentials')
      }
    } catch (error) {
      console.log('Error', error.message)
    }
  }

  async function handleRegister(e) {
    e.preventDefault()

    if (email === '' || password === '') {
      console.log('campo vacio')
      return
    }

    const URL = 'http://localhost:3001/register'
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    }
    try {
      // Si hago con axios me da error
      // const response = await fetch(URL, config)
      const response = await fetch(URL, config)
      if (response.status >= 200 && response.status < 300) {
        console.log('Registro exitoso')
        navigate('/')
      } else {
        console.log('Error en la solicitud:', response.status)
      }
    } catch (error) {
      console.log('Error:', error.message)
    }
  }

  useEffect(() => {
    // axios.get('http://localhost:3001/profile')
    fetch('http://localhost:3001/profile', {
      credentials: 'include'
    })
      .then(res => res.json(res))
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  function handleLogout() {
    // axios.post('http://localhost:3001/logout')
    fetch('http://localhost:3001/logout', {
      method: 'POST',
      credentials: 'include'
    })
    setUserInfo('')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ handleEmailChange, handlePasswordChange, handleLogin, handleRegister, handleLogout, userInfo }}>
      {children}
    </AuthContext.Provider>
  )
}
