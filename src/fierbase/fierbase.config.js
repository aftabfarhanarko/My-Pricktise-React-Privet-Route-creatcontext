
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw6l_CVndP9_j4UdUzDQJMzJ6cloQk428",
  authDomain: "startmy-project.firebaseapp.com",
  projectId: "startmy-project",
  storageBucket: "startmy-project.firebasestorage.app",
  messagingSenderId: "231992187125",
  appId: "1:231992187125:web:2326c50c99a73a59a30dbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
