import useUserData from "../../hooks/useUserData";
import useUserControls from "../../redux/control/userControls";

import { UserType } from "../../types";

type SuggestionType = {
  user: UserType;
};

function Suggestion({ user }: SuggestionType) {
  const { userId } = useUserControls();
  const { addFollower, removeFollower, useGetUserRealTime } = useUserData();

  const currentUser = useGetUserRealTime(userId);

  const isFollowing = (tobeCheckUid: string) =>
    !!currentUser.data?.following.includes(tobeCheckUid);

  const handleFollowBtn = () => {
    addFollower(userId, user.uid);
  };

  const handleUnfollowBtn = () => {
    removeFollower(userId, user.uid);
  };

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
      {isFollowing(user.uid) ? (
        <button
          type="button"
          onClick={handleUnfollowBtn}
          className="rounded-sm bg-app-black-1 py-2 px-5 font-bold text-app-white-1 active:bg-app-gray-2 dark:text-inherit"
        >
          Unfollow
        </button>
      ) : (
        <button
          type="button"
          onClick={handleFollowBtn}
          className="rounded-sm bg-app-black-1 py-2 px-5 font-bold text-app-white-1 active:bg-app-gray-2 dark:text-inherit"
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default Suggestion;
