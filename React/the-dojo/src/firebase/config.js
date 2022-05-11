import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCXSh_bFWTpFuB1rveARfZb6CoWC6XsUfc',
  authDomain: 'thedojo-67576.firebaseapp.com',
  projectId: 'thedojo-67576',
  storageBucket: 'thedojo-67576.appspot.com',
  messagingSenderId: '499600221469',
  appId: '1:499600221469:web:7595cb76212335a159edf4',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
