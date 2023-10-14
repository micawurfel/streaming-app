import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateButton() {
  return (
    <Link to={'/create'}>
      <button>New Video</button>
    </Link>
  )
}
