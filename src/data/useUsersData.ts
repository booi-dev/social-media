import useDb from "./useDb";

function useUsersData() {
  const { addDataToDb, useGetDataFromDb, useGetDataALlFromDb, useIsDataInDb } =
    useDb();

  const addUserToDb = (data) => {
    addDataToDb(data, "users");
  };

  const useGetUserFromDb = (toGetUId: string) => {
    const res = useGetDataFromDb(toGetUId, "users");
    return res;
  };

  const useGetUserAllFromDb = (dbCollection: string) => {
    const res = useGetDataALlFromDb(dbCollection);
    return res;
  };

  const useIsUserInDb = (toCheckUId: string) => {
    const res = useIsDataInDb(toCheckUId, "users");
    return res;
  };

  return { addUserToDb, useGetUserFromDb, useGetUserAllFromDb, useIsUserInDb };
}

export default useUsersData;
