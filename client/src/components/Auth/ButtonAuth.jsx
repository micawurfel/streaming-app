import React from 'react'
import { Link } from 'react-router-dom'
import styled from './Button.module.css'

export default function ButtonAuth(props) {
  return (
    <>
      <Link to={props.to}>
        <button className={styled.button}>{props.title}</button>
      </Link>
    </>
  )
}
