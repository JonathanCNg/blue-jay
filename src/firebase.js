// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
<<<<<<< Updated upstream
  apiKey: "AIzaSyBBsag1fMZHQgkGtM1bfKPYa04DalfLTtg",
  authDomain: "bluejay-cf7c1.firebaseapp.com",
  projectId: "bluejay-cf7c1",
  storageBucket: "bluejay-cf7c1.appspot.com",
  messagingSenderId: "21401365321",
  appId: "1:21401365321:web:ce9c60ca557d67b99ec898",
  measurementId: "G-8D13M5SW81"
=======
    apiKey: "AIzaSyBBsag1fMZHQgkGtM1bfKPYa04DalfLTtg",
    authDomain: "bluejay-cf7c1.firebaseapp.com",
    projectId: "bluejay-cf7c1",
    storageBucket: "bluejay-cf7c1.appspot.com",
    messagingSenderId: "21401365321",
    appId: "1:21401365321:web:ce9c60ca557d67b99ec898",
    measurementId: "G-8D13M5SW81"
>>>>>>> Stashed changes
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBn9Hm4nHrwBruQ85UZ3hOA85N6dNFdV-k",
//   authDomain: "compsci-125.firebaseapp.com",
//   databaseURL: "https://compsci-125-default-rtdb.firebaseio.com",
//   projectId: "compsci-125",
//   storageBucket: "compsci-125.appspot.com",
//   messagingSenderId: "153650425969",
//   appId: "1:153650425969:web:a1daec6ffd1831f221ebd0",
//   measurementId: "G-1DBF9QXCBM"
// };


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
export const database = getDatabase(app);
