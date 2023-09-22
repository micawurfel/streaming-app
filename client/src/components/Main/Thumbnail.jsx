import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import prueba from '../../assets/videos/video-prueba.mp4'

export default function Thumbnail(props) {
  const [hover, setHover] = useState(false)

  let timeOut
  const handelMouseEnter = () => {
    timeOut = setTimeout(() => {
      setHover(true)
    }, 1000)
  }

  const handelMouseLeave = () => {
    clearTimeout(timeOut)
    setHover(false)
  }

  return (
    <div className='thumbnail'
      onMouseEnter={handelMouseEnter}
      onMouseLeave={handelMouseLeave}
    >

      {hover === true
        ? <ReactPlayer
          url={prueba}
          // url={props.url}
          loop
          playing
          width='330px'
          height='200px'
          muted
        />
        : <img src={props.thumbnail} alt="" className='thumbnail rounded' />
      }

    </div>
  )
}
