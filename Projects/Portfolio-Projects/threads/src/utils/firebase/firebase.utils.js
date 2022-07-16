import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCU-oFPB_orex56ouy9dZ1Kj_480rPK0ZA",
  authDomain: "threads34.firebaseapp.com",
  projectId: "threads34",
  storageBucket: "threads34.appspot.com",
  messagingSenderId: "859513123393",
  appId: "1:859513123393:web:801bd1eebe96b3a156ccc0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

