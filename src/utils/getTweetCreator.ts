import usersData from "../data/usersData";

function getTweetCreator(toGetUid: string) {
  const users = usersData();
  const user = users.find((u) => u.uid === toGetUid);
  return user;
}

export default getTweetCreator;
