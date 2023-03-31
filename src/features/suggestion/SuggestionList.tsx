import Suggestion from "./Suggestion";
import userData from "../../hooks/useUsersData";

function SuggestionList() {
  const users = userData();

  return (
    <div className="rounded-sm bg-app-white-2 text-inherit dark:bg-app-black-3">
      <h1 className="rounded-sm bg-inherit px-4 py-3 text-app-font-20 font-bold">
        Who to follow
      </h1>
      {users.slice(0, 3).map((user) => (
        <Suggestion key={user.uid} user={user} />
      ))}
    </div>
  );
}

export default SuggestionList;
