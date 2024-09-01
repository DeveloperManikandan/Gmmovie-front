import {createSlice} from "@reduxjs/toolkit";
// import { PopularMovies } from "../utils/constant";

const movieSlice = createSlice({
    name: "movie",
    initialState:{
    PlayingMovies : null,
    PopularMovies :null,
    UpcomingMovies:null,
    TopRatedMovies:null,
    toggle : false,
    trailerMovie :null,
    open : false,
    id :"",
    },
    reducers: {
    // actions
        getplayingMovies: (state, action)=>{
        state.PlayingMovies = action.payload;
        },
        getpopularMovies: (state, action)=>{
            state.PopularMovies = action.payload;
            },
            getupcomingMovies: (state, action)=>{
                state.UpcomingMovies = action.payload;
                },
                gettopRatedMovies: (state, action)=>{
                    state.TopRatedMovies = action.payload;
                    },
                    setToggle: (state)=>{
                        state.toggle = !state.toggle;
                        },
                        setTrailerMovie :(state,action) =>{
                            state.trailerMovie = action.payload;
                        },
                        setOpen :(state,action) =>{
                            state.open = action.payload;
                        },
                        getId :(state,action) =>{
                            state.id = action.payload;
                        }
    }
}); 
export const {getplayingMovies,getpopularMovies,gettopRatedMovies,getupcomingMovies,setToggle,setTrailerMovie,setOpen,getId} = movieSlice.actions;
export default movieSlice.reducer;