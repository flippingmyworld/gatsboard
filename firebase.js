import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-S09g-MtU77ICkQOwNT0HYUFSCV2YFgk',
  authDomain: 'pads-4116b.firebaseapp.com',
  projectId: 'pads-4116b',
  storageBucket: 'pads-4116b.appspot.com',
  messagingSenderId: '894573860869',
  appId: '1:894573860869:web:c28c3de39035d8544c646c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of boards from database
export async function getBoards() {
  const boardCol = collection(db, 'pads');
  const boardSnapshot = await getDocs(boardCol);
  const boardList = boardSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return boardList;
}

export async function getBoard(id) {
  const boardCol = collection(db, 'pads');
  const boardSnapshot = await getDocs(boardCol);
  const boardList = boardSnapshot.docs
    .filter((doc) => id == doc.id)
    .map((doc) => ({ ...doc.data(), id: doc.id }));
  return boardList;
}

export async function addBoard(data) {
  const boardCol = collection(db, 'pads');

  const newBoardSnapshot = await addDoc(boardCol, data);
  return newBoardSnapshot.id;
}

export default db;
