import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const Register = () => {
  const [user, setUser] = useState({
    // name: "",
    // lastname: "",
    email: '',
    // user: "",
    password: ''
  })

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(user.email, user.password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form className="form bg-primary-subtle" onSubmit={handleSubmit}>
        <h1 className="h3">Sign up</h1>

        {/* <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" name='name' className="form-control" onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">LastName </label>
        <input type="text" name='lastname' className="form-control" onChange={handleChange} />
      </div> */}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        {/* <div className="mb-3"></div>
        <label htmlFor="user" className="form-label">UserName</label>
        <input type="text" name='user' className="form-control" onChange={handleChange} />
      </div> */}

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">Register</button>
      </form>
    </>
  )
}
