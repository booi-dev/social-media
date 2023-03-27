import useUserControls from "../../../redux/control/userControls";

import LikeUI from "../actionUIs/LikeUI";
import ReplyUI from "../actionUIs/ReplyUI";
import RePost from "../actionUIs/RePost";
import ViewUI from "../actionUIs/ViewUI";
import ShareUI from "../actionUIs/ShareUI";

import { PostType, TypeStateType } from "../../../types";

type ActionPanelType = {
  post: PostType;
  typeState: TypeStateType;
};

function ActionPanel(props: ActionPanelType) {
  const { post, typeState } = props;

  const { user } = useUserControls();

  return (
    <div className="my-1 flex w-full justify-between border-b-[0px] border-app-white-1 bg-inherit text-inherit dark:border-app-gray-1">
      <ReplyUI post={post} />
      <RePost post={post} typeState={typeState} />
      <LikeUI user={user} post={post} />
      <ViewUI />
      <ShareUI />
    </div>
  );
}

export default ActionPanel;
