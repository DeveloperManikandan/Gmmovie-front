import React from 'react'
import { IMG_url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setOpen ,getId} from '../redux/movieSlice';

const MovieCards = ({posterPath,movieId}) => {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
    };

  if(posterPath===null) return null;

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
      <img src={`${IMG_url}/${posterPath}`} alt='movie1'/>
    </div>
  )
}

export default MovieCards;
