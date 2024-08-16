import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            mainMovieTrailer:null,
            popularMovies:null,
            topRatedMovies:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addTrailer:(state,action)=>{
                state.mainMovieTrailer=action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies = action.payload;
            },
            addTopRatedMovies:(state,action)=>{
                state.topRatedMovies = action.payload;
            },
            addUpcomingMovies:(state,action)=>{
                state.upcomingMovies = action.payload;
            },

        }
    }
);

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} =moviesSlice.actions;
export default moviesSlice.reducer;