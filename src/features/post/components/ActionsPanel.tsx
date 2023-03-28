import useUserControls from "../../../redux/control/userControls";

import { ReplyUI, RePostUI, LikeUI, ViewUI, ShareUI } from "../actionUIs";

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
      <RePostUI post={post} typeState={typeState} />
      <LikeUI user={user} post={post} />
      <ViewUI />
      <ShareUI />
    </div>
  );
}

export default ActionPanel;
