import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
console.log(process.env.FIREBASE_apiKey)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: "gatsboard.firebaseapp.com",
  projectId: "gatsboard",
  storageBucket: "gatsboard.appspot.com",
  messagingSenderId: "617681269629",
  appId: process.env.FIREBASE_appId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
