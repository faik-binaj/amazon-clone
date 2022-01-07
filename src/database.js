// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDHHcOG6uwTRTI2tt-nVTHEsp3mCvoUeuE",
  authDomain: "clone-51650.firebaseapp.com",
  projectId: "clone-51650",
  storageBucket: "clone-51650.appspot.com",
  messagingSenderId: "513025790235",
  appId: "1:513025790235:web:4ed9b88af6b6b07b3083be",
  measurementId: "G-KNB1TDJ7MW",
});

// const db = firebaseApp.firestore()
const auth = firebase.auth();

export { auth };
