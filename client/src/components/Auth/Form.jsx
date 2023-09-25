import React from 'react'
import { useAuthContext } from '../../context/authContext'
import './formStyle.css'

export default function Form(props) {
  const { handleEmailChange, handlePasswordChange } = useAuthContext()

  return (
    <>
      <form
        className="form bg-primary-subtle"
        onSubmit={props.event}
      >
        <h1 className="h3">{props.title}</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handlePasswordChange}
          />
        </div>

        <button className="btn btn-primary">{props.title}</button>
      </form>
    </>
  )
}
