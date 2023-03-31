import {
  doc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const updateDataOfDb = async (
  collectionName: string,
  fieldName: string,
  fieldValue: any,
  tobeUpdatedData: any
) => {
  try {
    const q = query(
      collection(db, collectionName),
      where(fieldName, "==", fieldValue)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((d) => {
      const docRef = doc(collection(db, collectionName), d.id);
      updateDoc(docRef, tobeUpdatedData);
    });
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
    console.error(e);
  }
};

export default updateDataOfDb;
