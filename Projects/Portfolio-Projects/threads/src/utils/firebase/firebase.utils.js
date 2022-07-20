import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'
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

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth , provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName, email , createdAt, ...additionalInformation
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userDocRef

}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password) return
  createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return

  return await signInWithEmailAndPassword(auth , email, password)
}