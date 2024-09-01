import axios from "axios";
import { useDispatch } from "react-redux";
import { upcomingMovies, options } from "../utils/constant.js";
import { getupcomingMovies } from '../redux/movieSlice.js';

const useUpcomingmovies = async () => {
    const dispatch = useDispatch();
    try {
    const res = await axios.get(upcomingMovies, options,{ timeout: 10000 });
    dispatch(getupcomingMovies(res.data.results));
    } catch (error) {
    console.log(error);
    }
  }

  export default useUpcomingmovies;