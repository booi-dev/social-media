import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
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

//

export const useGetRealDataFromDb = <T extends GenericIDs>(
  collectionName: string,
  targetField: string,
  targetFieldId: any,
  toGetDataField?: any
) => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      where(targetField, "==", targetFieldId)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const res = doc.data() as T;
        setData(res);
      });
    });
    return () => {
      unsubscribe();
    };
  }, [collectionName]);

  return data;
};

//
export const useGetDataAllFromDb = <T extends { uid: string }>(
  collectionName: string,
  skipIds?: string[]
) => {
  const [dataAll, setDataAll] = useState<T[]>([]);

  useEffect(() => {
    const getDataAll = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const retrievedData: T[] = [];
      querySnapshot.forEach((doc) => {
        const res = doc.data() as T;
        if (skipIds) {
          if (!skipIds?.includes(res.uid)) retrievedData.push(res);
        } else retrievedData.push(res);
      });
      setDataAll(retrievedData);
    };
    getDataAll();
  }, [collectionName]);

  return dataAll;
};

//
export const useGetSomeRealDataFromDb = <T>(
  collectionName: string,
  count: number
) => {
  const [dataSome, setDataSome] = useState<T[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("createAt", "desc"),
      limit(count)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const retrievedData: T[] = [];
      querySnapshot.forEach((doc) => {
        const res = doc.data() as T;
        retrievedData.push(res);
      });
      setDataSome(retrievedData);
    });

    return () => {
      unsubscribe();
    };
  }, [collectionName, count]);

  return dataSome;
};
