import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants'



const Header = () => {

const navigate = useNavigate();
const user= useSelector(store=>store.user);
const dispatch = useDispatch();
const handleSignOut =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        // dispatch(removeUser);
       
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
}

useEffect(()=>{

    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
        },[]);

  return (

    <div className="w-full bg-opacity-100 absolute z-10  flex justify-between">
       
        <img className='m-5 w-60'
          src={LOGO}
          alt="Movie-Buddy-Logo"
        />
        {user &&  <div className='w-60 flex flex-col justify-between items-center'>
           <p className='text-xl text-red-400'>{user?.displayName}</p>
        
            <button className='text-white p-2 rounded-lg hover:bg-slate-600 font-bold text-xl mb-3 mx-10 bg-black' onClick={handleSignOut} >Sign Out</button>
        
        </div>}
      
      </div>

  )
}

export default Header