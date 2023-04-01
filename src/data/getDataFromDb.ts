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

type GenericIDs = {
  uid?: string;
  pid?: string;
};

export const getDataFromDb = async <T extends GenericIDs>(
  collectionName: string,
  toGetId: string
) => {
  let data: T | undefined;
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    const res = doc.data() as T;
    if (res.uid === toGetId || res.pid === toGetId) data = res;
  });
  if (!data) throw new Error(`Could not find document with id ${toGetId}`);
  return data;
};

export const useGetDataFromDb = <T extends GenericIDs>(
  collectionName: string,
  toGetId: string
) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
        const res = doc.data() as T;
        if (res.uid === toGetId || res.pid === toGetId) setData(res);
      });
    };
    getData();
  }, [collectionName, toGetId]);

  return data;
};

export const useGetDataAllFromDb = <T>(collectionName: string) => {
  const [dataAll, setDataAll] = useState<T[]>([]);

  useEffect(() => {
    const getDataAll = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const updatedDataAll: T[] = [];
      querySnapshot.forEach((doc) => {
        const res = doc.data() as T;
        updatedDataAll.push(res);
      });
      setDataAll(updatedDataAll);
    };
    getDataAll();
  }, [collectionName]);

  return dataAll;
};

export const useGetSomeRealDataFromDb = <T>(
  collectionName: string,
  count: number
) => {
  const [dataSome, setDataSome] = useState<T[]>([]);

  useEffect(() => {
    // Set up the query for the collection with the specified count limit and ordering by "createAt"
    const q = query(
      collection(db, collectionName),
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
  }, [collectionName, count]);

  return dataSome;
};
