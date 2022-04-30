// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5UYZbuhD3Zk8E9a4Rv6HhO1Pose9DOvc",
  authDomain: "genius-car-services-d6027.firebaseapp.com",
  projectId: "genius-car-services-d6027",
  storageBucket: "genius-car-services-d6027.appspot.com",
  messagingSenderId: "101049455399",
  appId: "1:101049455399:web:c57d1151b77d15ae5a8f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
