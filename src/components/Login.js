import React, { useState } from 'react'
import Header from './Header';
import axios from "axios";
import { Api_end } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { setUser,setLoading } from '../redux/userSlice';
// import store from "../redux/store.js";

const Login = () => {
  const [islogin,setislogin]= useState(false);
  const [username,setusername] =useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] =useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();

  const isloading = useSelector(store => store.app.isloading);

  const loginHandler =() =>{
    setislogin(!islogin);
  }
  const getformdata = async (e) =>
  {
    e.preventDefault();
    dispatch(setLoading(true));
    if(islogin)
    {
      const user = {email:email,password:password};
      try{
      const res = await axios.post(`${Api_end}/login`,user,{
        headers: {
          "Content-Type": "application/json",
          },
      });
      console.log(res);
      if(res.data.success)
        {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        nav("/browser");
      }
      catch(err)
      {
        toast.error(err.response.data.message);
        console.log(err);
        }
        finally{
          dispatch(setLoading(false));
        }
    }
    else{
      const user = {username:username,email:email,password:password};
      console.log(user);
    try{
            const res = await axios.post(`${Api_end}/register`,user,{
              headers: {
                "Content-Type": "application/json",
                },
                // withCredentials:true
            });
            console.log(res);
            if(res.data.success)
            {
              toast.success(res.data.message);
            }
            setislogin(true);
    }
    catch(err){
      toast.error(err.response.data.message);
      console.log(err);
      }
    }
    setusername("");
    setemail("");
    setpassword("");
  }
  
  return (
    <div>
        <Header />
        <div className='absolute'>
           <img className='w-[100%]' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3988284.jpg&f=1&nofb=1&ipt=0e578f51118a5a536483132c1fbf98802d7c2def53fa9f6283838ba470b5f789&ipo=images" alt="banner"/>
        </div>
        <form onSubmit={getformdata} className='flex flex-col p-12 absolute justify-center items-center w-3/12 mx-auto my-32 left-0 right-0 bg-black opacity-90'>
          <h1 className='text-white text-3xl font-bold mb-5'>{islogin?"Sign-in":"Sign-up"}</h1>

          <div className=' flex flex-col justify-center items-center'>
            {
          !islogin&&<input type='text' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='user-name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
            }
          <input type='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='e-mail' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
          <button type='submit' className='outline-none rounded-sm w-11/12 bg-red-800 m-3 p-2 text-white font-medium'>{`${isloading?"loading...":(islogin? "Login":"Sign-up")}`}</button>
          <p className='text-white mt-2'>{islogin?"New to  Netflix?":"Already have account?"}<span onClick={loginHandler} className='text-blue-900 ml-1 font-medium cursor-pointer'>{islogin?"Sign-up":"Login"}</span></p>
          

          </div>
          

        </form>
    </div>
  )
}

export default Login;
