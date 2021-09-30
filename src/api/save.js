import db from '../../firebase';
import { collection, addDoc } from 'firebase/firestore/lite';

async function addBoard(data) {
  const boardCol = collection(db, 'boards');
  const newBoardSnapshot = await addDoc(boardCol, data);
  return newBoardSnapshot.id;
}

export default function handler(req, res) {
  if (req.method === `POST`) {
    addBoard(req.body).then((data) => res.status(200).json({ result: data }));
  }
}
