import React from 'react'
import useMovietrailer from '../hooks/useMovietrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);

    useMovietrailer(movieId);
    
    return (
        <div className=''>
            <iframe
            className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/"+trailerVideo+ "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
            </iframe>
        </div >
    )
}

export default VideoBackground