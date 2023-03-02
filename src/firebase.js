// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBBsag1fMZHQgkGtM1bfKPYa04DalfLTtg",
  authDomain: "bluejay-cf7c1.firebaseapp.com",
  projectId: "bluejay-cf7c1",
  storageBucket: "bluejay-cf7c1.appspot.com",
  messagingSenderId: "21401365321",
  appId: "1:21401365321:web:ce9c60ca557d67b99ec898",
  measurementId: "G-8D13M5SW81"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
