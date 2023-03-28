import { UserType } from "../../types";

type SuggestionType = {
  user: UserType;
};

function Suggestion({ user }: SuggestionType) {
  return (
    <div className="flex items-center justify-between gap-2 py-2 px-4 hover:bg-app-white-3 dark:hover:bg-transparent">
      <div className="flex items-center gap-2">
        <img
          src={user.displayPicURL}
          alt=""
          className="h-14 w-14 rounded-md object-cover"
        />
        <div>
          <h1 className="text-app-font-17 font-bold"> {user.displayName} </h1>
          <h2 className="text-app-gray-3"> {`@${user.userName}`} </h2>
        </div>
      </div>
      <button
        type="button"
        className="rounded-sm bg-app-black-1 py-2 px-5 font-bold text-app-white-1 dark:text-inherit"
      >
        Follow
      </button>
    </div>
  );
}

export default Suggestion;
