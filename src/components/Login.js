import React, { useRef, useState } from 'react'
import { checkValidation } from '../utils/validate';

const Login = () => {
  const [errorMessage,setErrorMessage]=useState(null);
  const email = useRef(null);
  const password = useRef(null);
    const [isSignInForm, setIsSignInForm]=useState(true);
    const handleSignINUpForm =()=>{
        setIsSignInForm(!isSignInForm);
        console.log(email);
    }

    const handleButton=()=>{
      const message =checkValidation(email.current.value,password.current.value);
      setErrorMessage(message);
    }

  return (
    <div className=''>
    <div className='w-60 absolute m-10 z-10 bg-gradient-to-t from-white shadow-lg'> <img src="https://www.ucraft.com/ai-logo-generator/app/_next/image?url=https%3A%2F%2Fstatic.ucraft.ai%2Ffs%2Flogos%2Fpng%2Fa9b46c3e-78d7-4bbb-a334-c48d344bc79c%2Fwordmark%2F5ed199ca-4bcf-4fb2-8d16-4bc576f6495c.png&w=1080&q=75" alt="" /></div>
    <img className='absolute h-screen w-screen object-cover' src="https://filmlifestyle.com/wp-content/uploads/2022/04/VOD52.jpg" alt="bg" />
    <form onSubmit={(e)=>e.preventDefault()} className='m-auto left-0 right-0 top-1/4  p-5 absolute w-3/12  bg-black bg-opacity-70'>
        <h1 className='text-white font-bold text-2xl'> {isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input className='w-full my-3 p-2' type="text" name="" id=""  placeholder='Full Name'/>}
        <input ref={email}  className='w-full my-3 p-2' type="text" name="" id=""  placeholder='Email Address'/>
        <input ref={password}className='w-full my-3 p-2' type="password" name="" id="" placeholder='Password'/>
        {
          errorMessage && <p className='text-red-500 font-bold'> {errorMessage} </p>
        }
        <button  className='text-white p-2 my-3 bg-red-600 w-full' onClick={handleButton}  >{isSignInForm?"Sign In":"Sign Up"}</button>
        <p onClick={handleSignINUpForm} className='cursor-pointer text-lg my-3 text-white'>{isSignInForm?"Not an user? Sign Up here":"Already an user? Sign In here"}</p>
    </form>
    </div>
  )
}

export default Login