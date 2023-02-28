// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBn9Hm4nHrwBruQ85UZ3hOA85N6dNFdV-k",
  authDomain: "compsci-125.firebaseapp.com",
  databaseURL: "https://compsci-125-default-rtdb.firebaseio.com",
  projectId: "compsci-125",
  storageBucket: "compsci-125.appspot.com",
  messagingSenderId: "153650425969",
  appId: "1:153650425969:web:a1daec6ffd1831f221ebd0",
  measurementId: "G-1DBF9QXCBM"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
