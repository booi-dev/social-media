import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const useDb = () => {
  const addUserToDb = async (tobeAddUser) => {
    try {
      const docRef = await addDoc(collection(db, "users"), tobeAddUser);
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const getUserFromDb = async (tobeGetUid: string) => {
    let user;
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.uid === tobeGetUid) user = data;
    });
    console.log(user);
    return user;
  };

  const isUserInDb = async (tobeCheckUid: string) => {
    let isUserPresent;
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const data = doc.data();
      if (data.uid === tobeCheckUid) isUserPresent = true;
      else isUserPresent = false;
    });
    console.log(isUserPresent);
    return isUserPresent;
  };

  return { isUserInDb, addUserToDb, getUserFromDb };
};

export default useDb;
