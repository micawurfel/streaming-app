import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import styled from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styled.footer}>
      <p>Develop with <BsFillSuitHeartFill /> by <a href="https://www.micawurfel.com">@micawurfel</a></p>
    </footer>
  )
}
