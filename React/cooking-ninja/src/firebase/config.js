import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBu4G3p_NVSKmslLc4WYZ0sa5Q6jN3xHp0',
  authDomain: 'cooking-masters-e214e.firebaseapp.com',
  projectId: 'cooking-masters-e214e',
  storageBucket: 'cooking-masters-e214e.appspot.com',
  messagingSenderId: '672761183119',
  appId: '1:672761183119:web:8f1f85270b974b2a4c29fa',
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore();

export { projectFirestore };
