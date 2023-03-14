import React from "react";
import Suggestion from "./Suggestion";
import userData from "../../data/usersData";

function SuggestionList() {
  const users = userData();

  return (
    <div className="bg-app-white-2 dark:bg-app-black-3 text-inherit rounded-2xl">
      <h1 className="px-4 py-3 text-app-font-20 font-bold rounded-2xl bg-inherit">
        Who to follow
      </h1>
      {users.slice(0, 3).map((user) => (
        <Suggestion key={user.uid} user={user} />
      ))}
    </div>
  );
}

export default SuggestionList;
