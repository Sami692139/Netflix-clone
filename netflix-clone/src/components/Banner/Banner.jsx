import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './banner.css';

const Banner = () => {
    const [movie, setMovie]= useState({});

    useEffect(()=>{
        (async ()=>{
            try {
                const request = await axios.get(requests.feacthMovies);
                console.log(request);
                setMovie(request.data.results[Math.floor(math.random()*request.data.results.length)]);
            } catch (error) {
                console.log('error', error);
            }
        })()
    },[]);
    
    function truncate(str,n){
        return srt?.length> n ? str.substr(0, n-1) + '...': str;
    }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="banner_contents">
          {movie?.original_title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">play</button>
          <button className="banner_button ">My List</button>
        </div>
        {/* <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> */}
      </div>
      <div className="banner_fedBottom" />
    </div>
  );
}

export default Banner;