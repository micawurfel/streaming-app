import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonAuth(props) {
  return (
    <>
      <Link to={props.to}>
        <button className="btn btn-primary">{props.title}</button>
      </Link>
    </>
  )
}
