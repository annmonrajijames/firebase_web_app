// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALbQFN8C4wyIUtWqcqQuDabQGXf0U34xU",
  authDomain: "fir-frontend-f658b.firebaseapp.com",
  projectId: "fir-frontend-f658b",
  storageBucket: "fir-frontend-f658b.appspot.com",
  messagingSenderId: "89490793543",
  appId: "1:89490793543:web:d3254a97b4b13919a07d62",
  measurementId: "G-58LR4TNGXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);