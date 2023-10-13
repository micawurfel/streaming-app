import React from 'react'

export default function VideoForm(props) {
  return (
    <form onClick={props.event}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="" />

      <label htmlFor="description"></label>
      <input type="text" name='description' />

      <button>{props.button}</button>
    </form>
  )
}
