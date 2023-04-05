import {
  addDataToDb,
  getDataFromDb,
  useGetDataAllFromDb,
  isDataInDb,
} from "../data";
import { UserType } from "../types";

function useUsersData() {
  const addUserToDb = (data: UserType) => {
    addDataToDb("users", data);
  };

  const getUserFromDb = async (toGetUId: string) => {
    const res = await getDataFromDb<UserType>("users", toGetUId);
    return res;
  };

  const useGetUserAllFromDb = (dbCollection: string) => {
    const res = useGetDataAllFromDb(dbCollection);
    return res;
  };

  const isUserInDb = async (toCheckUId: string) => {
    const res = await isDataInDb("users", toCheckUId);
    return res;
  };

  return { addUserToDb, getUserFromDb, useGetUserAllFromDb, isUserInDb };
}

export default useUsersData;
