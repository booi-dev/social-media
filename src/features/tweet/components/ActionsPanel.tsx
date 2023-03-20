import useUserControls from "../../../redux/control/userControls";

import LikeUI from "../actionUIs/LikeUI";
import ReplyUI from "../actionUIs/ReplyUI";
import ReTweet from "../actionUIs/ReTweet";
import ViewUI from "../actionUIs/ViewUI";
import ShareUI from "../actionUIs/ShareUI";

import { TweetType, TypeStateType } from "../../../types";

type TweetActionsType = {
  tweet: TweetType;
  typeState: TypeStateType;
};

function TweetActionsUI(props: TweetActionsType) {
  const { tweet, typeState } = props;

  const { user } = useUserControls();

  return (
    <div className="flex justify-between w-full bg-inherit text-inherit border-b-[0px] border-app-white-1 dark:border-app-gray-1 ">
      <ReplyUI tweet={tweet} />
      <ReTweet tweet={tweet} typeState={typeState} />
      <LikeUI user={user} tweet={tweet} />
      <ViewUI />
      <ShareUI />
    </div>
  );
}

export default TweetActionsUI;
