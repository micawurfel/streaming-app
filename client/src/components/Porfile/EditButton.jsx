import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'

export default function EditButton(props) {
  return (
    <Link to={props.to}>
      <button>
        <AiOutlineEdit />
      </button>
    </Link>
  )
}
