// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq-i0r3qsYXACigHk5KkkYuzq0y2YtA1Q",
  authDomain: "netflixgpt-86fc3.firebaseapp.com",
  projectId: "netflixgpt-86fc3",
  storageBucket: "netflixgpt-86fc3.firebasestorage.app",
  messagingSenderId: "445609283731",
  appId: "1:445609283731:web:ea04cb20b1a466509efd66",
  measurementId: "G-K9NQ89H41G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);