import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt3NECW6LBTJVZ9upRCeXK1jnrcYKz6yA",
    authDomain: "vynil-store-7b8e1.firebaseapp.com",
    projectId: "vynil-store-7b8e1",
    storageBucket: "vynil-store-7b8e1.appspot.com",
    messagingSenderId: "419302890250",
    appId: "1:419302890250:web:70c23a18bf699fbf6a78f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
