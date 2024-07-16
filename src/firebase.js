import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoJypQRwq03f2KOB5cRJYeJrB8HboBAws",
    authDomain: "clone-app-14231.firebaseapp.com",
    projectId: "clone-app-14231",
    storageBucket: "clone-app-14231.appspot.com",
    messagingSenderId: "590438811266",
    appId: "1:590438811266:web:d9dce891a9652f3708969b",
    measurementId: "G-6XKYS340L9"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
