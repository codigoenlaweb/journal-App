// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlw2cfiQ83qF4rCX2OZ3PreAPhSePsusU",
    authDomain: "journal-app-458b3.firebaseapp.com",
    projectId: "journal-app-458b3",
    storageBucket: "journal-app-458b3.appspot.com",
    messagingSenderId: "942760676516",
    appId: "1:942760676516:web:428799c7f348d592c86a31",
    measurementId: "G-12C6JKCZZ8"
  };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getDatabase(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
