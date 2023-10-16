import React from 'react'
// import React, { useEffect, useState } from 'react'
import ButtonAuth from '../Auth/ButtonAuth'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import styled from './Navbar.module.scss'

export default function Navbar() {
  // const [userInfo, setUserInfo] = useState()

  // useEffect(() => {
  //   fetch('http://localhost:3001/profile', {
  //     credentials: 'include'
  //   })
  //     .then(res => res.json(res))
  //     .then(res => setUserInfo(res.id))
  //     .catch(err => console.log(err))
  // }, [])

  // function logout() {
  //   fetch('http://localhost:3001/logout', {
  //     method: 'POST',
  //     credentials: 'include'
  //   })
  //   setUserInfo('')
  // }

  return (
    <nav className={styled.nav}>
      <Link to={'/'}>
        <h1 className={styled.logo}> LOGO </h1>
      </Link>
      <form className={styled.form}>
        <input className={styled.input} type="text" placeholder='Serch' />
        <button><BsSearch /></button>
      </form>
      {/* <div> */}
      {/* {userInfo !== '' && userInfo !== undefined
          ? <>
            <button onClick={logout}>Log out</button>
          </>
          : <> */}
      <Link to='/profile'>
        <button>Profile</button>
      </Link>
      <ButtonAuth to={'/login'} title="Login" />
      {/* </> */}
      {/* } */}
      {/* </div> */}
    </nav >
  )
}
