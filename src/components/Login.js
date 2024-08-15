import React, { useRef, useState } from "react";
import { checkValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const name= useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();


  const handleSignINUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButton = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if(message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName:name.current.value
          }).then(() => {
            const {uid,email,displayName}= auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            

          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
          // ...
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "->> " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "->> " + errorMessage);
        });
    }
    
  };

  return (
    <div className="">
      <Header/>
      <img
        className="absolute h-screen w-screen object-cover"
        src="https://filmlifestyle.com/wp-content/uploads/2022/04/VOD52.jpg"
        alt="bg"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="m-auto left-0 right-0 top-1/4  p-5 absolute w-3/12  bg-black bg-opacity-70">
        <h1 className="text-white font-bold text-2xl">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            className="w-full my-3 p-2"
            type="text"
            name=""
            id=""
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="w-full my-3 p-2"
          type="text"
          name=""
          id=""
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="w-full my-3 p-2"
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold"> {errorMessage} </p>
        )}
        <button
          className="text-white p-2 my-3 bg-red-600 w-full"
          onClick={handleButton}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={handleSignINUpForm}
          className="cursor-pointer text-lg my-3 text-white">
          {isSignInForm
            ? "Not an user? Sign Up here"
            : "Already an user? Sign In here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
