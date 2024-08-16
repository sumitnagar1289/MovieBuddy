import React from 'react'
import Header from './Header'
import useMoviesFetch from '../hooks/useNowPlayingMovies'
import MainMovieContainer from './MainMovieContainer';
import MoviesListContainer from './MoviesListContainer';

import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  useMoviesFetch();
  
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div className='m-0'>
      <Header/>
      <MainMovieContainer/>
      <MoviesListContainer/>
    </div>
  )
}

export default Browse