import {useEffect} from 'react';
import axios from 'axios';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setTrailerMovie } from '../redux/movieSlice';

const useMovieById = async (movieId) => {
    const dispatch = useDispatch();
    useEffect (() => {
    const setMovieById = async () => {
    try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options,{ timeout: 10000 });
    console.log(res.data.results);
    const trailer = res?.data?.results?.filter((item) => {
    return item.type === "Trailer";
    })
    dispatch(setTrailerMovie (trailer.length > 0 ? trailer[0] : res.data.results[0]));
    } catch (error) {
    console.log(error);
    }
    }
    setMovieById();
    },[])
    }

export default useMovieById
