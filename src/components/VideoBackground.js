import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId,bool}) => {
  const trailerMovie = useSelector(store => store.movie.trailerMovie);
  useMovieById(movieId,bool);
  return (
    <div className={`${bool ?"w-[vw] overflow-hidden" :"w-[vw] overflow-hidden -mt-10"}`}>
      <iframe
      className={`${bool ?"w-[100%]" :"w-screen aspect-video"}`}
      src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=rDRcXFtvaOIQKwMu&autoplay=1&mute=1`}
      title="YouTube video player" 
      frameBorder="0" 
      allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground;
 