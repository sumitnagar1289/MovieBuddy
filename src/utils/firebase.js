// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwtSkZTWCqGpPLzJQ05XoXDjcxd_yp7Ko",
  authDomain: "moviegpt1.firebaseapp.com",
  projectId: "moviegpt1",
  storageBucket: "moviegpt1.appspot.com",
  messagingSenderId: "278153610038",
  appId: "1:278153610038:web:17dc887578b138d18fa997",
  measurementId: "G-V1RQ617CYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();