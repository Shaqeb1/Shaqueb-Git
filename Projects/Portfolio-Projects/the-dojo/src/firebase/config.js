import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDev8jQHDhhkWOvaeXgruNcuwsyvOY4S7c",
  authDomain: "thedojosite-fdc2f.firebaseapp.com",
  projectId: "thedojosite-fdc2f",
  storageBucket: "thedojosite-fdc2f.appspot.com",
  messagingSenderId: "968939341425",
  appId: "1:968939341425:web:81825d6d76e4d41326bdd0"
};


// init firebase 
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}