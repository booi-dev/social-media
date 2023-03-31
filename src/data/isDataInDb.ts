import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const isDataInDb = async (toCheckId: string, dbCollection: string) => {
  let isDataIn;
  const querySnapshot = await getDocs(collection(db, dbCollection));
  querySnapshot.forEach((doc) => {
    const res = doc.data();
    if (res.uid === toCheckId || res.pid === toCheckId) isDataIn = true;
    else isDataIn = false;
  });
  return isDataIn as boolean;
};

export const useIsDataInDb = <T extends { uid: string }>(
  toCheckId: string,
  dbCollection: string
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
