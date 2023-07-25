import React, { useState } from 'react'
import ReactPlayer from "react-player";
import prueba from '../../assets/videos/video-prueba.mp4'

export function Thumbnail(props) {

    const [hover, setHover] = useState(false)

  return (
    <div className='thumbnail' 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        >
        
        {hover === true ?
            <ReactPlayer 
            className='video-thumbnail'
            url={prueba}
            loop
            playing
            width='330px'
            height= '200px'
            muted
            />
            :
            <img src={props.thumbnail} alt="" className='thumbnail rounded'/>
        }

    </div>
  )
}
