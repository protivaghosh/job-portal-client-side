// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVaK8AzdkCgNYqtrddlng9_Mc7PlvxRUw",
  authDomain: "job-portal-1e4b1.firebaseapp.com",
  projectId: "job-portal-1e4b1",
  storageBucket: "job-portal-1e4b1.firebasestorage.app",
  messagingSenderId: "995329155104",
  appId: "1:995329155104:web:dc25cef8fd7e9bee181c45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;