import React from 'react'
import { Link } from 'react-router-dom'

export default function Buttons() {
  return (
    <>
      <Link to={'/login'}>
        <button className="btn btn-primary">LogIn</button>
      </Link>
      <Link to={'/register'}>
        <button className="btn btn-danger">Sign up</button>
      </Link>
    </>
  )
}
