import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Movie.css'

const Movie = (props) => {
  const Navigate = useNavigate()
  
  const handleClick = () => {
    const id = props?.item.id.slice(7)
    console.log(id)
    // console.log(props?.item.id)
    Navigate(`/${id}`)
  }
    
  return (
    <div className='Movie_Main' onClick={handleClick}>
      <img src={props?.item.image.url} alt={props?.item.title} className="Movie_Main_img" />
      <p>{props?.item.title}</p>
      <button>Play Now</button>
      
        
    </div>
  )
}

export default Movie