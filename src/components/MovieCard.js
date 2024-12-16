import React from 'react'
import { IMG_CDN_URL } from './constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-52 pr-6'>
        <img 
        alt='Movie Card'
        src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard