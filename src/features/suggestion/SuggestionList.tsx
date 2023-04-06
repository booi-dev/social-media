import Suggestion from "./Suggestion";
import useUsersData from "../../hooks/useUsersData";
import useUserControls from "../../redux/control/userControls";

import { UserType } from "../../types";

function SuggestionList() {
  const { user } = useUserControls();
  const { useGetUserAllFromDb } = useUsersData();

  const users: UserType[] = useGetUserAllFromDb([user.uid]);

  return (
    <div className="rounded-sm bg-app-white-2 text-inherit dark:bg-app-black-3">
      <h1 className="rounded-sm bg-inherit px-4 py-3 text-app-font-20 font-bold">
        Who to follow
      </h1>
      {users.slice(0, 3).map((u) => (
        <Suggestion key={u.uid} user={u} />
      ))}
    </div>
  );
}

export default SuggestionList;
