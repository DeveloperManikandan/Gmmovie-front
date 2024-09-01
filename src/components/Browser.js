import React, { useEffect } from 'react'
import Header from './Header';
import {useSelector} from "react-redux";
// import store from "../redux/store.js";
import {useNavigate} from "react-router-dom";
import MainContainer from './MainContainer.js';
import MoviContainer from './MoviContainer.js';
import usePlayingMovies from '../hooks/usePlayingmovie.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useUpcomingmovies from '../hooks/useUpcomingMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import store from '../redux/store.js';
import SearchMovie from './SearchMovie.js';


const Browser = () => {
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle)
  const nav = useNavigate();
  
  usePlayingMovies();
  usePopularMovies();
  useUpcomingmovies();
  useTopRatedMovies();
  
  useEffect(()=>{
    if(!user) nav("/")
      },[]);

  return (
    <div>
        <Header />
        <div>
          {
            toggle ? <SearchMovie/> :
            (<>
              <MainContainer/>
              <MoviContainer/>
            </>)
          }
    </div>
    </div>
  )
}

export default Browser;
