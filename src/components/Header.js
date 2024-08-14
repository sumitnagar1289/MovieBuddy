import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import appStore from '../utils/appStore'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'
const Header = () => {
const navigate = useNavigate();
const user= useSelector(store=>store.user);
const dispatch = useDispatch();
const handleSignOut =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        // dispatch(removeUser);
        navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error");
      });
}

  return (

    <div className="w-full absolute z-10 bg-gradient-to-b flex justify-between from-white shadow-lg">
       
        <img className='m-5 w-60'
          src="https://www.ucraft.com/ai-logo-generator/app/_next/image?url=https%3A%2F%2Fstatic.ucraft.ai%2Ffs%2Flogos%2Fpng%2Fa9b46c3e-78d7-4bbb-a334-c48d344bc79c%2Fwordmark%2F5ed199ca-4bcf-4fb2-8d16-4bc576f6495c.png&w=1080&q=75"
          alt=""
        />
        {user &&  <div className='w-60 flex flex-col justify-between items-center'>
           <p className='text-xl text-red-400'>{user.displayName}</p>
        
            <button className='text-white p-2 rounded-lg hover:bg-slate-600 font-bold text-xl mb-3 mx-10 bg-black' onClick={handleSignOut} >Sign Out</button>
        
        </div>}
      
      </div>

  )
}

export default Header