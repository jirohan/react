// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANjIo8oAmNSUSgrbFSHL1TAa7miVr_MxQ",
  authDomain: "react-course-21420.firebaseapp.com",
  projectId: "react-course-21420",
  storageBucket: "react-course-21420.appspot.com",
  messagingSenderId: "1061739381741",
  appId: "1:1061739381741:web:819420c89b78df10c91de4",
  measurementId: "G-VJFLJM27XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);