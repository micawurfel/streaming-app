import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      }

      const response = await fetch(URL, config)

      if (response.ok) {
        response.json().then(userInfo => {
          console.log(userInfo)
          // setUserInfo(userInfo)
          navigate('/')
          console.log('login')
        })
      } else {
        console.log('wrong credentials')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  async function handleRegister(e) {
    e.preventDefault()
    try {
      const URL = 'http://localhost:3001/register'
      const config = {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ email, password })
      }
      await fetch(URL, config)
      navigate('/login')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <AuthContext.Provider value={{ handleEmailChange, handlePasswordChange, handleLogin, handleRegister }}>
      {children}
    </AuthContext.Provider>
  )
}
