import React, { useEffect, useState } from 'react'
import './row.css';
import axios from '../../../utils/axios';

const Row= ({title, fetchUrl,isLargeRow})=>{
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const base_url = "https://image.tmdb.org/t/p/original";


    useEffect(()=>{
        (async()=>{
            try {
                console.log(fetchUrl)
                const request = await axios.get(fetchUrl);
                setMovie(request.data.results);
            } catch (error) {
                console.log('error',error);
                
            }
        })()
    },[])

     return <div>Row</div>;
}


 


export default Row