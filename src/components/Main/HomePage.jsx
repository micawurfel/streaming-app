import React, { useState } from 'react'
import { Title } from './Title'
import { VideoList } from './VideoList'


function HomePage() {
    
    const [videos, setVideos] = useState([])
      
  return (
    <>
        <div className='row'>
            <div className='col '>
                <Title title="Navbar"></Title>
            </div>
        </div>

        <div className='row'>
            <div className='col-0 col-sm-2'>
                <Title title="Sidebar"></Title>
            </div>
            <div className='col'>
                <div className='row'>    
                    <Title title="TITULO"></Title>
                </div>
                <div className='row'>    
                    <VideoList videos={videos}/>
                </div>    
            </div>
        </div>
    </>
  )
}

export default HomePage