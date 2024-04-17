// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDYlhaUJGzQUj2cM0p0gHe9jb-KOhOGL0",
    authDomain: "shop-e-commerce-be894.firebaseapp.com",
    projectId: "shop-e-commerce-be894",
    storageBucket: "shop-e-commerce-be894.appspot.com",
    messagingSenderId: "579791037428",
    appId: "1:579791037428:web:dc3e8e70e73468833a4fa1",
    measurementId: "G-XRNW7XQCGT"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
