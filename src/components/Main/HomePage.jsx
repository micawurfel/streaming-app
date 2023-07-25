import React from 'react'
import { Title } from './Title'
import { VideoList } from './VideoList'


function HomePage() {
    const videos = [
        {id: 1, title: 'Yoga Inermedia, Nivel B+ || video 3', data:' 3days ago', reproductions: 34049,  author: 'Micaela', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", thumbnail: 'https://img.freepik.com/vector-gratis/miniatura-moderna-youtube-fondo-arte-comico_1361-2738.jpg?w=1800&t=st=1690188616~exp=1690189216~hmac=48b76fb2dd080b9e99fc9166d7602e2b2285fa2e622225a03f01dee54761a1b2'},
        {id: 2, title: 'Yoga Principiantes, Nivel A+ || video 4 bla bla bla bla', data:' 3days ago', reproductions: 34049, author: 'Micaela', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", thumbnail: 'https://img.freepik.com/vector-gratis/diseno-moderno-miniaturas-youtube-impresionante-plantilla-texto_1361-2737.jpg?w=1480&t=st=1690188664~exp=1690189264~hmac=3eddaf33bb93dd1c497cf8b04db4932273a616ca8e07f68cb2be290735985494'},
        {id: 3, title: 'React, Nivel B+ || video 3', data:' 3days ago', reproductions: 34049, author: 'Micaela', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", thumbnail: 'https://img.freepik.com/vector-gratis/miniatura-moderna-youtube-fondo-arte-comico_1361-2738.jpg?w=1800&t=st=1690188616~exp=1690189216~hmac=48b76fb2dd080b9e99fc9166d7602e2b2285fa2e622225a03f01dee54761a1b2'},
        {id: 4, title: 'Yoga Inermedia, Nivel B+ || video 3', data:' 3days ago', reproductions: 34049, author: 'Micaela', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", thumbnail: 'https://img.freepik.com/vector-gratis/miniatura-moderna-youtube-fondo-arte-comico_1361-2738.jpg?w=1800&t=st=1690188616~exp=1690189216~hmac=48b76fb2dd080b9e99fc9166d7602e2b2285fa2e622225a03f01dee54761a1b2'},
        {id: 5, title: 'Yoga Inermedia', data:' 3days ago', reproductions: 34049, author: 'Micaela', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", thumbnail: 'https://img.freepik.com/vector-gratis/miniatura-moderna-youtube-fondo-arte-comico_1361-2738.jpg?w=1800&t=st=1690188616~exp=1690189216~hmac=48b76fb2dd080b9e99fc9166d7602e2b2285fa2e622225a03f01dee54761a1b2'},
        {id: 43, title: 'Yoga Inermedia, Nivel B+ || video 3', data:' 3days ago', reproductions: 34049, author: 'Micaela', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", thumbnail: 'https://img.freepik.com/vector-gratis/miniatura-moderna-youtube-fondo-arte-comico_1361-2738.jpg?w=1800&t=st=1690188616~exp=1690189216~hmac=48b76fb2dd080b9e99fc9166d7602e2b2285fa2e622225a03f01dee54761a1b2'},
        {id: 343, title: 'Yoga Inermedia, Nivel B+ || video 3 || Yoga Inermedia, Nivel B+ || video 3 || dkljlksjlkdjlkjlkdjlksjlkdjd', data:' 3days ago', reproductions: 34049, author: 'Micaela', avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", thumbnail: 'https://img.freepik.com/vector-gratis/miniatura-moderna-youtube-fondo-arte-comico_1361-2738.jpg?w=1800&t=st=1690188616~exp=1690189216~hmac=48b76fb2dd080b9e99fc9166d7602e2b2285fa2e622225a03f01dee54761a1b2'}
      ]
      
  return (
    <div>
        <Title title="My Video stremer"></Title>
        <VideoList videos={videos}/>
    </div>
  )
}

export default HomePage