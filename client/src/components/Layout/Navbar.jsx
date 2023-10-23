import React from 'react'
import ButtonAuth from '../Auth/ButtonAuth'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import styled from './Navbar.module.scss'
import { useAuthContext } from '../../context/authContext'

export default function Navbar() {
  const { userInfo, handleLogout } = useAuthContext()
  // console.log(userInfo)
  return (
    <nav className={styled.nav}>
      <Link to={'/'}>
        <h1 className={styled.logo}> LOGO </h1>
      </Link>
      <form className={styled.form}>
        <input className={styled.input} type="text" placeholder='Serch' />
        <button><BsSearch /></button>
      </form>
      <div>
        {userInfo === '' || userInfo === undefined
          ? <ButtonAuth to={'/login'} title="Login" />
          : <>
            <Link to='/profile'>
              <button>Profile</button>
            </Link>
            <button onClick={handleLogout}>Log out</button>
          </>
        }
      </div>
    </nav >
  )
}
