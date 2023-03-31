import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

export const getDataFromDb = async (toGetId: string, dbCollection: string) => {
  let data;
  const querySnapshot = await getDocs(collection(db, dbCollection));
  querySnapshot.forEach((doc) => {
    const res = doc.data();
    if (res.uid === toGetId) data = res;
  });
  return data;
};

export const useGetDataFromDb = <T extends { uid: string }>(
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

export const useGetDataAllFromDb = <T>(dbCollection: string) => {
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

export const useGetSomeRealDataFromDb = <T>(
  dbCollection: string,
  count: number
) => {
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
