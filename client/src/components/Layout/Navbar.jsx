import React from 'react'
import ButtonAuth from '../Auth/ButtonAuth'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import styled from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styled.nav}>
      <Link to={'/'}>
        <h1 className={styled.logo}> LOGO </h1>
      </Link>
      <form className={styled.form}>
        <input className={styled.input} type="text" placeholder='Serch' />
        <button><BsSearch /></button>
      </form>
      <ButtonAuth to={'/login'} title="Login" />
    </nav>
  )
}
