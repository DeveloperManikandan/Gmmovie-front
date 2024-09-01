import axios from "axios";
import { useDispatch } from "react-redux";
import {topRatedMovies, options } from "../utils/constant.js";
import { gettopRatedMovies } from '../redux/movieSlice.js';

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
    try {
    const res = await axios.get(topRatedMovies, options,{ timeout: 10000 });
    dispatch(gettopRatedMovies(res.data.results));
    } catch (error) {
    console.log(error);
    }
  }

  export default useTopRatedMovies;