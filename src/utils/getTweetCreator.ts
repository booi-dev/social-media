import userData from "../data/userData";

function getTweetCreator(toGetUid: string) {
  const users = userData();
  const user = users.find((u) => u.uid === toGetUid);
  return user;
}

export default getTweetCreator;
