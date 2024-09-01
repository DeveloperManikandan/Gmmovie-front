import axios from "axios";
import { useDispatch } from "react-redux";
import { playingMovies, options } from "../utils/constant.js";
import { getplayingMovies } from '../redux/movieSlice.js';

const usePlayingMovies = async () => {
    const dispatch = useDispatch();
    try {
    const res = await axios.get(playingMovies, options,{ timeout: 10000 });
    dispatch(getplayingMovies(res.data.results));
    } catch (error) {
    console.log(error);
    }
  }

  export default usePlayingMovies;