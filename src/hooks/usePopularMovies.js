import axios from "axios";
import { useDispatch } from "react-redux";
import { popularMovies, options } from "../utils/constant.js";
import { getpopularMovies } from '../redux/movieSlice.js';

const usePopularMovies = async () => {
    const dispatch = useDispatch();
    try {
    const res = await axios.get(popularMovies, options,{ timeout: 10000 });
    dispatch(getpopularMovies(res.data.results));
    } catch (error) {
    console.log(error);
    }
  }

  export default usePopularMovies;