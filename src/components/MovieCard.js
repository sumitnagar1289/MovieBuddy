import React from 'react'
import { useSelector } from 'react-redux'
import { POSTER_CDN_URL} from '../utils/constants'

const MovieCard = ({posterPath}) => {
  
    
  return (
        <div className='w-[200px]  pr-4'>
            <img src={POSTER_CDN_URL +posterPath} alt="poster" />
        </div>
  )
}

export default MovieCard