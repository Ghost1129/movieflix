import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import '../styles/MovieDetail.css'

const MovieDetail = () => {
    const param = useParams();
    const [data, setData] = React.useState(null);
    const [summary, setSummary] = React.useState(null);
    console.log(data)
    

    useEffect(() => {
        fetchData();
        
        fetchSummary();
    }, [])

    const fetchData = async () => {
        axios.get('https://imdb8.p.rapidapi.com/title/get-details', {
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_IMDB_API,
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                },
                params: {
                    tconst: `${param.movieId}`
                }
            })
            .then(res => {
                setData(res.data)
            })
    }
    const fetchSummary = async () => {
        axios.get('https://imdb8.p.rapidapi.com/title/get-synopses', {
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_IMDB_API,
                    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
                },
                params: {
                    tconst: `${param.movieId}`
                }
            })
            .then(res => {
                setSummary(res.data)
            })
    }


  return (
    <>
        <Navbar/>
        {data && (
            <div className='Container'>
                <div className='Details_Upper'>
                    <img src={data?.image.url} alt="" />
                    <div className='Details_Info'>
                        <h2>{data?.title}</h2>
                        <p>Genre</p>
                        <p>Year:{data?.year}</p>
                        <div>
                        <button>Watch Now</button>
                        <button>Watch Later</button>
                        </div>
                       
                    </div>
                </div>
                <div className='Details_Lower'>
                    
                    {summary && (
                        <p>{summary[0]?.text}</p>
                    )}
                    {summary?.length <=0 && (
                        <p>Nothing To Show...</p>
                    )}
                </div>
            </div>
        )}
    </>
  )
}

export default MovieDetail