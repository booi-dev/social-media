// import useDb from "../data/isDataInDb";
import {
  addDataToDb,
  getDataFromDb,
  useGetDataAllFromDb,
  isDataInDb,
} from "../data";
import { UserType } from "../types";

function useUsersData() {
  const addUserToDb = (data) => {
    addDataToDb(data, "users");
  };

  const getUserFromDb = async (toGetUId: string) => {
    const res = await getDataFromDb<UserType>("users", toGetUId);
    return res;
  };

  const useGetUserAllFromDb = (dbCollection: string) => {
    const res = useGetDataAllFromDb(dbCollection);
    return res;
  };

  const isUserInDb = (toCheckUId: string) => {
    const res = isDataInDb("users", toCheckUId);
    return res;
  };

  return { addUserToDb, getUserFromDb, useGetUserAllFromDb, isUserInDb };
}

export default useUsersData;
