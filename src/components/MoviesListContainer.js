import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const MoviesListContainer = () => {
  const movies =  useSelector(store=>store.movies);
  return (
    <div className='bg-black'>
      <div className="relative -mt-[250px] z-100">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
    </div>
    </div>
  )
}

export default MoviesListContainer