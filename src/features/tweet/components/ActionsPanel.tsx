import useUserControls from "../../../redux/control/userControls";

import LikeUI from "../actionUIs/LikeUI";
import ReplyUI from "../actionUIs/ReplyUI";
import RePost from "../actionUIs/RePost";
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
    <div className="my-1 flex w-full justify-between border-b-[0px] border-app-white-1 bg-inherit text-inherit dark:border-app-gray-1">
      <ReplyUI post={tweet} />
      <RePost post={tweet} typeState={typeState} />
      <LikeUI user={user} post={tweet} />
      <ViewUI />
      <ShareUI />
    </div>
  );
}

export default TweetActionsUI;
