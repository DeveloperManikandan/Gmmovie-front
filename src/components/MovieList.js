import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({title,movies,searchMovie= false}) => {

  return (
    <div className='px-8'>
      <h1 className = {`text-3xl  py-3 ${searchMovie? "text-black" : "text-white"}`}>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar cursor-pointer'>
        <div className='flex items-center'>
          {
            movies && movies.map((movie) => {
              return (
                <MovieCards key={movie.id} movieId={movie.id} posterPath={movie.poster_path}/>
                )
                })
          }
        </div>
      </div>
    </div>
  )
}

export default MovieList;
