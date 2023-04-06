import {
  doc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../firebase";

export const updateDataInDb = async (
  collectionName: string,
  targetField: string,
  targetFieldValue: any,
  tobeUpdatedData: any
) => {
  try {
    const q = query(
      collection(db, collectionName),
      where(targetField, "==", targetFieldValue)
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

export const addArrayDataValueInDb = async (
  collectionName: string,
  targetField: string,
  targetFieldId: any,
  tobeUpdatedArrayField: string,
  tobeAddedArrayFieldValue: string
) => {
  try {
    const q = query(
      collection(db, collectionName),
      where(targetField, "==", targetFieldId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docSnap) => {
      const docRef = doc(collection(db, collectionName), docSnap.id);
      updateDoc(docRef, {
        [tobeUpdatedArrayField]: arrayUnion(tobeAddedArrayFieldValue),
      });
    });

    console.log(
      `${tobeUpdatedArrayField} added to ${collectionName}/${tobeAddedArrayFieldValue}`
    );
  } catch (error) {
    console.error(
      `Error adding ${tobeAddedArrayFieldValue} to ${collectionName}/${tobeUpdatedArrayField}:`,
      error
    );
  }
};

export const removeArrayDataValueInDb = async (
  collectionName: string,
  targetField: string,
  targetFieldId: any,
  tobeUpdatedArrayField: string,
  tobeAddedArrayFieldValue: string
) => {
  try {
    const q = query(
      collection(db, collectionName),
      where(targetField, "==", targetFieldId)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docSnap) => {
      const docRef = doc(collection(db, collectionName), docSnap.id);
      updateDoc(docRef, {
        [tobeUpdatedArrayField]: arrayRemove(tobeAddedArrayFieldValue),
      });
    });

    console.log(
      `${tobeUpdatedArrayField} remove from ${collectionName}/${tobeAddedArrayFieldValue}`
    );
  } catch (error) {
    console.error(
      `Error removing ${tobeAddedArrayFieldValue} to ${collectionName}/${tobeUpdatedArrayField}:`,
      error
    );
  }
};
