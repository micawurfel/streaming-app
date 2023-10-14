import React from 'react'
import styled from './VideoForm.module.scss'

export default function VideoForm(props) {
  return (
    <form onClick={props.event} className={styled.form}>
      <div className={styled.div}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="" className={styled.input} />
      </div>
      <div className={styled.div}>
        <label htmlFor="description">Description</label>
        <input type="text" name='description' className={styled.input} />
      </div>

      <button className={styled.button}>{props.button}</button>
    </form>
  )
}
