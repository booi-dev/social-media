import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase";

const useDb = () => {
  // get data from fb firestore
  const getDataFromDb = async (toGetId: string, dbCollection: string) => {
    let data;
    const querySnapshot = await getDocs(collection(db, dbCollection));
    querySnapshot.forEach((doc) => {
      const res = doc.data();
      if (res.uid === toGetId) data = res;
    });
    return data;
  };

  // get data from fb firestore - hook
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

  // get all data from a collection - hook
  const useGetDataAllFromDb = <T>(dbCollection: string) => {
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

  // get some reall time data according to the given count argument - hook
  const useGetSomeRealDataFromDb = <T>(dbCollection: string, count: number) => {
    const [dataSome, setDataSome] = useState<T[]>([]);

    useEffect(() => {
      // Set up the query for the collection with the specified count limit and ordering by "createAt"
      const q = query(
        collection(db, dbCollection),
        orderBy("createAt"),
        limit(count)
      );

      // Subscribe to the database collection with onSnapshot
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const updatedDataSome: T[] = [];
        querySnapshot.forEach((doc) => {
          const res = doc.data() as T;
          updatedDataSome.push(res);
        });
        setDataSome(updatedDataSome);
      });

      return () => {
        unsubscribe();
      };
    }, [dbCollection, count]);

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
    getDataFromDb,
    isDataInDb,
    useGetDataFromDb,
    useGetSomeRealDataFromDb,
    useGetDataAllFromDb,
    useIsDataInDb,
  };
};

export default useDb;
