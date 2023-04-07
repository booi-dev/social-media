import {
  addArrayDataValueInDb,
  removeArrayDataValueInDb,
  useGetDataFromDb,
  useGetRealDataFromDb,
} from "../data";
import { UserType } from "../types";

function useUserData() {
  const addFollower = (targetUid: string, tobeAddUid: string) => {
    addArrayDataValueInDb("users", "uid", targetUid, "following", tobeAddUid);
  };

  const removeFollower = (targetUid: string, tobeAddUid: string) => {
    removeArrayDataValueInDb(
      "users",
      "uid",
      targetUid,
      "following",
      tobeAddUid
    );
  };

  const useGetUserData = (toGetUid: string) => {
    const user = useGetDataFromDb<UserType>("users", toGetUid);
    return user;
  };

  const useGetUserRealTime = (toGetUid: string) => {
    const user = useGetRealDataFromDb<UserType>("users", "uid", toGetUid);
    return user;
  };

  return { addFollower, removeFollower, useGetUserData, useGetUserRealTime };
}

export default useUserData;
