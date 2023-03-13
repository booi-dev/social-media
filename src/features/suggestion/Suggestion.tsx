import React from "react";
import { UserType } from "../../types";

type SuggestionType = {
  user: UserType;
};

// type SuggestionPropType = {
//   suggestion: SuggestionType;
// };

function Suggestion({ user }: SuggestionType) {
  return (
    <div className="flex py-2 px-4 justify-between items-center gap-2 hover:bg-app-white-3 dark:hover:bg-transparent">
      <div className="flex items-center gap-2">
        <img
          src={user.displayPicURL}
          alt=""
          className="w-14 h-14 object-cover rounded-full"
        />
        <div>
          <h1 className="text-app-font-17 font-bold"> {user.displayName} </h1>
          <h2 className="text-app-gray-3"> {`@${user.userName}`} </h2>
        </div>
      </div>
      <button
        type="button"
        className="py-2 px-5 bg-app-black-1 text-inherit font-bold rounded-full"
      >
        Follow
      </button>
    </div>
  );
}

export default Suggestion;
