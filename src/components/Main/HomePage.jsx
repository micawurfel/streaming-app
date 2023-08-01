import React, { useEffect, useState } from 'react'
import { Title } from './Title'
import {VideoList} from './VideoList'
import { ApiService } from '../../services/ApiService'

function HomePage() {

    const apiService = new ApiService()
    const [videos, setVideos] = useState([])
    async function getVideos(){
        const response = await apiService.getVideos()
        setVideos(response.videos)
    }
    useEffect(()=>{
        getVideos()
    })

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