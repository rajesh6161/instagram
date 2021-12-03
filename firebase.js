// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANI_V5pya_ByDQVZbu-yceZQGyWEEe16k',
  authDomain: 'instagram-2-9ffa6.firebaseapp.com',
  projectId: 'instagram-2-9ffa6',
  storageBucket: 'instagram-2-9ffa6.appspot.com',
  messagingSenderId: '925973964696',
  appId: '1:925973964696:web:548b4c6ad357445d456ded',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
