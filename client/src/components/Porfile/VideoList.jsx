import React from 'react'
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'
import styled from './VideoList.module.scss'

export default function VideoList({ videos }) {
  return (
    <section >{videos.map(video =>
      <div className={styled.section} key={video.id}>
        <img src={video.thumbnail} alt="" style={{ width: '100px' }} />
        <h1 > {video.title} </h1>
        <EditButton to={`/edit/${video.id}`} />
        <DeleteButton />
      </div>)}
    </section>
  )
}
