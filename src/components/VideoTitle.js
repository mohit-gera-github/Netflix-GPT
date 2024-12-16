import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
            <h1 className='text-6xl font-bold' >{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='bg-white  text-black p-4 px-16 border border-black rounded-lg mr-4 hover:bg-opacity-40'> Play 💝</button>
                <button className='bg-gray-500 bg-opacity-40 text-white p-4 px-16 border border-black rounded-lg hover:bg-opacity-90'>  More Info</button>
            </div>

        </div>
    )
}

export default VideoTitle