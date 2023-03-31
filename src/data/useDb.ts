import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { PostType } from "../types";

const useDb = () => {
  const addDataToDb = async (toAddData: PostType, dbCollection: string) => {
    try {
      const docRef = await addDoc(collection(db, dbCollection), toAddData);
      console.log(`data added to ${dbCollection}, with ID ${docRef.id}`);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const getDataFromDb = async (toGetId: string, dbCollection: string) => {
    let data;
    const querySnapshot = await getDocs(collection(db, dbCollection));
    querySnapshot.forEach((doc) => {
      const res = doc.data();
      if (res.uid === toGetId) data = res;
    });
    return data;
  };

  const useGetDataFromDb = <U extends { uid: string }>(
    toGetId: string,
    dbCollection: string
  ) => {
    const [data, setData] = useState<U>();

    useEffect(() => {
      const getData = async () => {
        const querySnapshot = await getDocs(collection(db, dbCollection));
        querySnapshot.forEach((doc) => {
          const res = doc.data() as U;
          if (res.uid === toGetId) setData(res);
        });
      };
      getData();
    }, [toGetId, dbCollection]);

    return data;
  };

  const useGetDataALlFromDb = <UA>(dbCollection: string) => {
    const [dataAll, setDataAll] = useState<UA[]>([]);

    useEffect(() => {
      const getDataAll = async () => {
        const querySnapshot = await getDocs(collection(db, dbCollection));
        querySnapshot.forEach((doc) => {
          const res = doc.data() as UA;
          setDataAll([...dataAll, res]);
        });
      };
      getDataAll();
    }, [dbCollection]);

    return dataAll;
  };

  const isDataInDb = async (toCheckId: string, dbCollection: string) => {
    let isDataIn;
    const querySnapshot = await getDocs(collection(db, dbCollection));
    querySnapshot.forEach((doc) => {
      const res = doc.data();
      if (res.uid === toCheckId) isDataIn = true;
      else isDataIn = false;
    });
    return isDataIn as boolean;
  };

  const useIsDataInDb = <U extends { uid: string }>(
    toCheckId: string,
    dbCollection: string
  ) => {
    const [isData, setIsData] = useState(false);

    useEffect(() => {
      const checkData = async () => {
        const querySnapshot = await getDocs(collection(db, dbCollection));
        querySnapshot.forEach((doc) => {
          const res = doc.data() as U;
          if (res.uid === toCheckId) setIsData(true);
          else setIsData(false);
        });
      };
      checkData();
    }, [toCheckId, dbCollection]);

    return isData;
  };

  return {
    addDataToDb,
    getDataFromDb,
    isDataInDb,
    useGetDataFromDb,
    useGetDataALlFromDb,
    useIsDataInDb,
  };
};

export default useDb;
