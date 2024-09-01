import React from 'react'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import store from '../redux/store';

const MainContainer = () => {
  const movie =useSelector(store => store.movie?.PlayingMovies);
  if(!movie) return;
  const {id,title,overview} = movie[4];
  return (
    <div>
        <VideoTitle title={title} overview={overview}/>
     <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
