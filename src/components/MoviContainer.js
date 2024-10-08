import React from 'react'
import MovieList from './MovieList';
import {useSelector} from 'react-redux';

const MoviContainer = () => {
  const movie = useSelector(store => store.movie);
  // console.log(movie);
  return (
    <div className='bg-black '>
      <div className='-mt-52 relative z-10'>
        <MovieList title={"Playing Movies"}  movies={movie.PlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movie.PopularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movie.UpcomingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movie.TopRatedMovies}/>
      </div>
    </div>
  )
}

export default MoviContainer;
