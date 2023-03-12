import React from "react";
import Suggestion from "./Suggestion";
import userData from "../../data/userData";

function SuggestionList() {
  const users = userData();

  return (
    <div className="bg-app-white-2 rounded-2xl">
      <h1 className="px-4 py-3 text-app-font-20 font-bold rounded-2xl bg-app-white-2">
        Who to follow
      </h1>
      {users.slice(0, 3).map((user) => (
        <Suggestion key={user.uid} user={user} />
      ))}
    </div>
  );
}

export default SuggestionList;
