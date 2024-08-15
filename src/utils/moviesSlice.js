import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name:"movie",
        initialState:{
            nowPlayingMovies:null,
            mainMovieTrailer:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addTrailer:(state,action)=>{
                state.mainMovieTrailer=action.payload;
            },
        }
    }
);

export const {addNowPlayingMovies, addTrailer} =moviesSlice.actions;
export default moviesSlice.reducer;