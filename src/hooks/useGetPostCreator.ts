import { useUsersData } from "../data";

function useGetPostCreator(toGetUid: string) {
  const { getUserFromDb } = useUsersData();
  const user = getUserFromDb(toGetUid);
  return user;
}

export default useGetPostCreator;
