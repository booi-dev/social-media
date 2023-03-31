import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
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

  const useGetDataFromDb = <T extends { uid: string }>(
    toGetId: string,
    dbCollection: string
  ) => {
    const [data, setData] = useState<T>();

    useEffect(() => {
      const getData = async () => {
        const querySnapshot = await getDocs(collection(db, dbCollection));
        querySnapshot.forEach((doc) => {
          const res = doc.data() as T;
          if (res.uid === toGetId) setData(res);
        });
      };
      getData();
    }, [toGetId, dbCollection]);

    return data;
  };

  // get all data from a collection
  const useGetDataALlFromDb = <T>(dbCollection: string) => {
    const [dataAll, setDataAll] = useState<T[]>([]);

    useEffect(() => {
      const getDataAll = async () => {
        const querySnapshot = await getDocs(collection(db, dbCollection));
        const updatedDataAll: T[] = [];
        querySnapshot.forEach((doc) => {
          const res = doc.data() as T;
          updatedDataAll.push(res);
        });
        setDataAll(updatedDataAll);
      };
      getDataAll();
    }, [dbCollection]);

    return dataAll;
  };

  // get some data according to the given count argument
  const useGetSomeRealDataFromDb = <T>(dbCollection: string, count: number) => {
    const [dataSome, setDataSome] = useState<T[]>([]);

    useEffect(() => {
      const getDataSome = async () => {
        const querySnapshot = await getDocs(
          query(collection(db, dbCollection), orderBy("createAt"), limit(count))
        );
        const updatedDataSome: T[] = [];
        querySnapshot.forEach((doc) => {
          const res = doc.data() as T;
          updatedDataSome.push(res);
        });
        setDataSome(updatedDataSome);
      };
      getDataSome();
    }, [dbCollection, limit]);

    return dataSome;
  };

  // check if
  const isDataInDb = async (toCheckId: string, dbCollection: string) => {
    let isDataIn;
    const querySnapshot = await getDocs(collection(db, dbCollection));
    querySnapshot.forEach((doc) => {
      const res = doc.data();
      if (res.uid === toCheckId || res.pid === toCheckId) isDataIn = true;
      else isDataIn = false;
    });
    return isDataIn as boolean;
  };

  const useIsDataInDb = <T extends { uid: string }>(
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

  return {
    addDataToDb,
    getDataFromDb,
    isDataInDb,
    useGetDataFromDb,
    useGetSomeRealDataFromDb,
    useGetDataALlFromDb,
    useIsDataInDb,
  };
};

export default useDb;
