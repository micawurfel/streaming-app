import React from 'react'
import ButtonAuth from '../Auth/ButtonAuth'

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <ButtonAuth to={'/login'} title="Login" />
    </div>
  )
}
