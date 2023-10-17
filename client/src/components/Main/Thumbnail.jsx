import React, { useState } from 'react'
import ReactPlayer from 'react-player'

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
    <div
      onMouseEnter={handelMouseEnter}
      onMouseLeave={handelMouseLeave}
    >

      {hover === true
        ? <ReactPlayer
          url={props.url}
          loop
          playing
          width='330px'
          height='200px'
          muted
        />
        : <img src={props.img} alt="" />
      }

    </div>
  )
}
