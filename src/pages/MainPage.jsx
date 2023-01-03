import React, {  useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Movie from '../components/Movie'
import '../styles/MainPage.css'


const MainPage = () => {
    const [data, setData] = React.useState([])
    
    

    useEffect(() => {
        axios.get('https://imdb8.p.rapidapi.com/title/v2/find', {
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_IMDB_API,
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                },
                params: {
                    title: 'game', limit: '12', sortArg: 'moviemeter,asc'
                }
            })
            .then(res => {
                setData(res.data.results)
            })
            
            
    }, [])
    



  return (
    <>
        <Navbar/>
        <div className='Main_Cont'>
           <div className='Main_Cont_Grid'>
                {data.map((item, index) => (
                    <Movie item={item} key={index}/>
                ))}
           </div>
           <div className='Main_Cont_Grid_Lower'>
                <button>See More</button>
           </div>
        </div>
    </>
  )
}

export default MainPage