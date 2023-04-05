import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const isDataInDb = async (dbCollection: string, toCheckId: string) => {
  let isDataIn = false;
  const querySnapshot = await getDocs(collection(db, dbCollection));
  querySnapshot.forEach((doc) => {
    const res = doc.data();
    if (res.uid === toCheckId || res.pid === toCheckId) isDataIn = true;
  });
  return isDataIn;
};

export const useIsDataInDb = <T extends { uid: string }>(
  dbCollection: string,
  toCheckId: string
) => {
  const [isData, setIsData] = useState(false);

  useEffect(() => {
    const checkData = async () => {
      const querySnapshot = await getDocs(collection(db, dbCollection));
      querySnapshot.forEach((doc) => {
        const res = doc.data() as T;
        if (res.uid === toCheckId) setIsData(true);
        else setIsData(false);
      });
    };
    checkData();
  }, [toCheckId, dbCollection]);

  return isData;
};
