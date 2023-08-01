import React, { Component, useState} from 'react'
import "./videos.json"

const api = "./videos.json"

export class ApiService extends Component {
  constructor(props){
    super(props);
   
        this.state = {
            videos: [],
        };
  }
  
  componentDidMount() {
    fetch(api)
      .then(res => (res.json()))
      .then(data => console.log(data))
      .catch(err => console.log(console.log(err)))
  }

  render() {
    
  }
}

const video = new ApiService()


const [videos, setVideos] = useState([]);

videos = video.getVideos();
setVideos(videos)

// useEffect(()=>{

//   fetch('/videos.json')
//       .then(res => (res.json()))
//       .then(data => console.log(data))
//       .catch(err => console.log(console.log(err)))
// }, []) 







