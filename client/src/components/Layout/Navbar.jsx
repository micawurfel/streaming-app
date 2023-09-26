import React from 'react'
import ButtonAuth from '../Auth/ButtonAuth'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

export default function Navbar() {
  return (
    <nav className='d-flex justify-content-between'>
      <Link to={'/'}>
        <h1> LOGO </h1>
      </Link>
      <form className='d-flex'>
        <input type="text" placeholder='Serch' />
        <button><BsSearch /></button>
      </form>
      <ButtonAuth to={'/login'} title="Login" />
    </nav>
  )
}
