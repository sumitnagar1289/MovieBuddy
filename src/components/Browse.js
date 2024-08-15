import React from 'react'
import Header from './Header'
import useMoviesFetch from '../hooks/useMoviesFetch'
import MainMovieContainer from './MainMovieContainer';
import MoviesListContainer from './MoviesListContainer';

const Browse = () => {

  useMoviesFetch();

  return (
    <div className='m-0'>
      <Header/>
      <MainMovieContainer/>
      {/* <MoviesListContainer/> */}
    </div>
  )
}

export default Browse