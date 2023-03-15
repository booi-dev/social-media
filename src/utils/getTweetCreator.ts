import usersData from "../data/usersData";

function getTweetCreator(toGetUid: string) {
  const users = usersData();
  const user = users.find((u) => u.uid === toGetUid);
  // let user;
  // users.forEach((u) => {
  //   if (u.uid === toGetUid) user = u;
  // });
  return user;
}

export default getTweetCreator;
