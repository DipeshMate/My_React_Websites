import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCmj0nbINMVuYDkHw-Fe175uHHOpWqga7g",
  authDomain: "fir-auth-1133.firebaseapp.com",
  projectId: "fir-auth-1133",
  storageBucket: "fir-auth-1133.appspot.com",
  messagingSenderId: "616123647468",
  appId: "1:616123647468:web:b3576c82a127ea53812cc9",
  measurementId: "G-VK5YC058TK"
};

// Initialize Firebase and authentication
const app = initializeApp(firebaseConfig);

const auth =  getAuth();

export { app,auth};