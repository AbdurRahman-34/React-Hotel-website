// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfVn6DrHYI8tGKsjgbDdFtzYBsv331QNc",
  authDomain: "react-hotel-website-cdc9f.firebaseapp.com",
  projectId: "react-hotel-website-cdc9f",
  storageBucket: "react-hotel-website-cdc9f.appspot.com",
  messagingSenderId: "920732886611",
  appId: "1:920732886611:web:236ba0bd7a4b31060bc8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;