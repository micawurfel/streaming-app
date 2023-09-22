import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

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

  return (
    <>
      <form
        action=""
        className="form bg-primary-subtle"
        onSubmit={handleLogin}
      >
        <h1 className="h3">LogIn</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Log In</button>
      </form>
    </>
  )
}
