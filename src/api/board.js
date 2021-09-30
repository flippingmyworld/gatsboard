import db from '../../firebase';
import { getDoc, doc } from 'firebase/firestore/lite';

async function getBoard(id) {
  const boardRef = doc(db, 'boards', id);
  const boardSnapshot = await getDoc(boardRef);
  if (boardSnapshot.exists()) {
    const boardData = boardSnapshot.data();
    boardData.settings.id = boardSnapshot.id;
    return [boardData];
  }
  return [];
}

export default function handler(req, res) {
  getBoard(req.body.id).then((data) => res.status(200).json({ body: req.body, result: data }));
}
