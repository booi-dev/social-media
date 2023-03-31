import useDb from "./useDb";
import { UserType } from "../types";

function useUsersData() {
  const { addDataToDb, getDataFromDb, useGetDataALlFromDb, isDataInDb } =
    useDb();

  const addUserToDb = (data) => {
    addDataToDb(data, "users");
  };

  const getUserFromDb = async (toGetUId: string): Promise<UserType> => {
    const res = await getDataFromDb(toGetUId, "users");
    return res;
  };

  const useGetUserAllFromDb = (dbCollection: string) => {
    const res = useGetDataALlFromDb(dbCollection);
    return res;
  };

  const isUserInDb = (toCheckUId: string) => {
    const res = isDataInDb(toCheckUId, "users");
    return res;
  };

  return { addUserToDb, getUserFromDb, useGetUserAllFromDb, isUserInDb };
}

export default useUsersData;
