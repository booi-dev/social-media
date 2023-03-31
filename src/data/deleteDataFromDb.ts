import {
  doc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const deleteDataFromDb = async (
  collectionName: string,
  fieldName: string,
  fieldValue: any
) => {
  try {
    const q = query(
      collection(db, collectionName),
      where(fieldName, "==", fieldValue)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((d) => {
      const docRef = doc(collection(db, collectionName), d.id);
      deleteDoc(docRef);
    });
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
    console.error("Error removing document: ", e);
  }
};

export default deleteDataFromDb;
