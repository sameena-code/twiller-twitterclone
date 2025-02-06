import React from 'react';  
import Widgets from './Widgets/Widgets';
import Sidebar from './Sidebar/sidebar';
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {useUserAuth} from "../context/UserAuthContext";
import Tweetbox from './Feed/Tweetbox/Tweetbox';

const Home=() =>{
   const {logOut,user}=useUserAuth()
      const navigate=useNavigate();
      console.log(user);
//  const user = {
//   displayname:"bithead",
    // email:"bithead@gmail.com"}
    
    
    const handlelogout=async()=>{
        try {
           await logOut()
            navigate("/login")
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='app'>
            <Sidebar handlelogout={handlelogout} user= {user}/>
            <Outlet/>
            <Widgets/>
        </div>
    )
};
export default Home;