import React from 'react';
import {useSelector} from "react-redux";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const VideoTitle = ({title,overview}) => {
    const user= useSelector((store)=>store.app.user);
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%]'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/3 text-sm mt-4'>{overview}</p>
        <div className='flex mt-8'>
            <button className='bg-red-800 bg-opacity-55 flex items-center text-white font-bold px-4 py-2 rounded hover:text-red-950 hover:bg-white'> 
                <IoPlayCircleOutline /> <span className='ml-1'>Play</span>
                </button>
            <button className='bg-opacity-55 bg-red-800 flex items-center mx-2 text-white font-bold px-4 py-2 rounded hover:text-red-950 hover:bg-white'>
            <MdOutlineWatchLater /> <span className='ml-1'>Watch later</span>
                </button>
            </div>
    </div>
  )
}

export default VideoTitle;
