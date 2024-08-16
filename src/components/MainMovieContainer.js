import React from 'react'
import { useSelector } from 'react-redux'
import { VideoBackground } from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainMovieContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);

    if(!movies) return; //early return if movies is null

    const mainMovie = movies[2];

const {original_title, overview,id}= mainMovie;

  return (
    <div>
        
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainMovieContainer