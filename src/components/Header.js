import React from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import {useSelector,useDispatch} from "react-redux";
import {Api_end} from "../utils/constant.js";
import axios from "axios";
import {setUser} from "../redux/userSlice.js";
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice.js';
import store from '../redux/store.js';
import gmlogo from '../photos/gmmovies.png';


const Header = () => {
  const user= useSelector((store)=>store.app.user);
  const toggle = useSelector( store => store.movie.toggle);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logoutHandler = async () => {
    try {
    const res = await axios.get(`${Api_end}/logout`,{ timeout: 10000 });
    console.log(res);
    dispatch(setUser(null));
    nav("/");
    toast.success("Logout Successfully");
    } catch (error){
    console.log(error);
    }
  }
  const toggleHandler = () =>{
    dispatch(setToggle());
  }

  return (
    <div className=' absolute z-10 flex w-[100vw] h-[25%] item-center justify-between bg-gradient-to-b from-black '>
      <img className='w-56 h-[50%] mt-10' src={`${gmlogo}`} alt='logo' />
      {
      user && (<div className='flex items-center text-white'>
        <h1 className='text-lg font-medium text-white'> {user.username}</h1>
        <IoIosArrowDropdown  size='24' className='bg-white text-black ml-2' />
        <div className='ml-4'>
            <button onClick={logoutHandler} className=' bg-red-800 text-white px-4 py-2'>logout</button> 
            <button onClick={toggleHandler} className=' bg-red-800 text-white px-4 py-2 ml-2'>{toggle ? "Home" :"Search"}</button>
        </div>
      </div>)
}
    </div>

  )
}

export default Header;
