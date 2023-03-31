import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const addDataToDb = async (toAddData, collectionName: string) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), toAddData);
    console.log(`data added to ${collectionName}, with ID ${docRef.id}`);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};

export default addDataToDb;
