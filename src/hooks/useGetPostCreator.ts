import { useUsersData } from "../data";
import { UserType } from "../types";

async function useGetPostCreator(toGetUid: string): Promise<UserType> {
  const { getUserFromDb } = useUsersData();
  const user = await getUserFromDb(toGetUid);
  return user;
}

export default useGetPostCreator;
