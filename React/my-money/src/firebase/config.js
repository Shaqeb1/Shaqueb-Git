import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDg38AxeMfekaXUKfd9rXKM527qdQLpsbY',
  authDomain: 'mymoney-b3e9a.firebaseapp.com',
  projectId: 'mymoney-b3e9a',
  storageBucket: 'mymoney-b3e9a.appspot.com',
  messagingSenderId: '390503782276',
  appId: '1:390503782276:web:7dfb5980f8750134d32fd1',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
// timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
