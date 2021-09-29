import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

// Get a list of boards from database
async function getBoards() {
  const boardCol = collection(db, 'pads');
  const boardSnapshot = await getDocs(boardCol);
  const boardList = boardSnapshot.docs.map((doc) => {
    const boardData = doc.data();
    boardData.settings.id = doc.id;
    return boardData;
  });
  return boardList;
}

export default function handler(req, res) {
  getBoards().then((data) => res.status(200).json({ result: data }));
}
