import {
  addArrayDataValueInDb,
  removeArrayDataValueInDb,
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

  const useGetUserRealTime = (uid: string) => {
    const user = useGetRealDataFromDb<UserType>("users", "uid", uid);
    return user;
  };

  return { addFollower, removeFollower, useGetUserRealTime };
}

export default useUserData;
