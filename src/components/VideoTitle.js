 import React from 'react'
 
 const VideoTitle = ({title, overview}) => {

   return (
     <div className='w-screen aspect-video text-white absolute px-40 pt-52 bg-gradient-to-r from-black'> 
        <h1 className='m-2 text-5xl font-bold'>{title}</h1>
         <p className='m-2 w-2/5'>{overview}</p>

         <div>
            <button className='mx-2 bg-slate-50  hover:bg-opacity-80 text-black w-28 p-2 rounded-lg'>▷ Play</button>
            <button className='mx-2 bg-gray-500 hover:bg-opacity-50 text-white w-28 p-2 rounded-lg bg-opacity-70'>More Info </button>
         </div>
    </div>
   )
 }
 
 export default VideoTitle